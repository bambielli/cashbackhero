import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import walletsClient from '../clients/wallets'
import cardsClient from '../clients/cards'
import Loading from '../components/Loading'
import AddCardForm from '../components/AddCardForm'
import Status from '../components/Status'

class CardsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      buttonDisabled: false,
      selectedCard: null,
      selectableCards: [],
      cards: [],
      status: {
        message: '',
        open: false
      }
    }
    this.handleCardChange = this.handleCardChange.bind(this)
    this.handleOpenChange = this.handleOpenChange.bind(this)
    this.addCardToWallet = this.addCardToWallet.bind(this)
    this.deleteFromWallet = this.deleteFromWallet.bind(this)
  }

  async componentDidMount() {
    try {
      const walletData = await walletsClient.getUserWallets()
      const selectableData = await cardsClient.getSelectableCards()
      this.setState({cards: walletData.data, selectableCards: selectableData.data, isLoading: false})
    } catch (e) {
      this.setState({ isLoading: false, status: { message: e, open: true }})
    }
  }

  handleCardChange(_, __, selectedCard) {
    this.setState({ selectedCard })
  }

  handleOpenChange(open) {
    this.setState({ status: { open, message: '' }})
  }

  async addCardToWallet() {
    const { selectedCard, selectableCards, cards } = this.state;
    this.setState({buttonDisabled: true});
    if (!selectedCard) {
      this.setState({
        status: {
          message: 'Please select a card from the dropdown',
          open: true
        },
        buttonDisabled: false
      })
    } else {
      try {
        await walletsClient.addCardToWallet(selectedCard.id)
        const newCards = cards.concat(selectedCard)
        const newSelectableCards =  selectableCards.filter(card => card.id !== selectedCard.id)
        this.setState({
          cards: newCards,
          selectableCards: newSelectableCards,
          selectedCard: null,
          status: {
            message: `Successfully added ${selectedCard.name} to your wallet`,
            open: true
          },
          buttonDisabled: false
        })
      } catch (e) {
        this.setState({
          status: {
            message: 'Something went wrong.',
            open: true
          },
          buttonDisabled: false
        })
      }
    }
  }

  async deleteFromWallet(e) {
    const { cards, selectableCards } = this.state;
    const cardToDelete = JSON.parse(e.currentTarget.value);
    if (!cardToDelete || !cardToDelete.id) {
      this.setState({status: { message: 'Could not delete card', open: true }})
    } else {
      try {
        const cardId = cardToDelete.id
        await walletsClient.deleteFromWallet(cardId);
        const newCards = cards.filter((card) => cardId !== card.id) // filter out from cards
        const newSelectableCards = selectableCards.concat(cardToDelete) // add to selectable cards
        this.setState({
          cards: newCards,
          selectableCards: newSelectableCards,
          status: {
            message: `Successfully deleted ${cardToDelete.name} from your wallet`,
            open: true
          },
        })
      } catch (e) {
        this.setState({
          status: {
            message: 'Something went wrong.',
            open: true
          },
        })
      }
    }
  }

  render() {
    const { cards, isLoading, selectableCards, selectedCard, status, buttonDisabled } = this.state;
    return (
      <Loading isLoading={isLoading}>
        <ul>
          {
            cards.length ?
            cards.map((card)=> <li key={card.id}>{card.name}<FlatButton label="X" secondary={true} value={JSON.stringify(card)} onClick={this.deleteFromWallet} /></li>)
            : <li>{`You don't have any cards in your wallet`}</li>
          }
        </ul>
        {
          selectableCards.length ?
          <div>
            <AddCardForm selectableCards={selectableCards} selectedCard={selectedCard} handleCardChange={this.handleCardChange} />
            <FlatButton label="Add Card" primary={true} disabled={buttonDisabled} onClick={this.addCardToWallet} />
          </div>
          : null
        }
        <Status {...status} handleOpenChange={this.handleOpenChange} />
      </Loading>
    );
  }
}

export default CardsPage;
