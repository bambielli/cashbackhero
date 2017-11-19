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
      selectedCard: null,
      selectableCards: [],
      cards: [],
      status: {
        message: '',
        open: false
      }
    }
    this.handleCardChange = this.handleCardChange.bind(this)
    this.addCardToWallet = this.addCardToWallet.bind(this)
    this.handleOpenChange = this.handleOpenChange.bind(this)
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
    console.log('changing open brooo', open)
    this.setState({ status: { open, message: '' }})
  }

  async addCardToWallet() {
    const { selectedCard, selectableCards, cards } = this.state;
    console.log(selectableCards, selectedCard )
    if (!selectedCard) {
      this.setState({
        status: {
          message: 'Please select a card from the dropdown',
          open: true
        }
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
          }
        })
      } catch (e) {
        this.setState({
          status: {
            message: 'Something went wrong, please try adding card again later.',
            open: true
          }
        })
      }
    }
  }

  render() {
    const { cards, isLoading, selectableCards, selectedCard, status } = this.state;
    return (
      <Loading isLoading={isLoading}>
        <ul>
          { cards.length ?
            cards.map((card)=>
              <li key={card.id}>{card.name}</li>
            ) :
            <li>{`You don't have any cards in your wallet`}</li>
          }
        </ul>
        <AddCardForm selectableCards={selectableCards} selectedCard={selectedCard} handleCardChange={this.handleCardChange} />
        <FlatButton label="Add Card" primary={true} disabled={false} onClick={this.addCardToWallet} />
        <Status {...status} handleOpenChange={this.handleOpenChange} />
      </Loading>
    );
  }
}

export default CardsPage;
