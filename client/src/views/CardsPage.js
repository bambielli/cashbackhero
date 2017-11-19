import React, { Component } from 'react'
import walletsClient from '../clients/wallets'
import cardsClient from '../clients/cards'
import Loading from '../components/Loading'
import AddCardForm from '../components/AddCardForm'

class CardsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      selectedValue: null,
      selectableCards: [],
      cards: [],
      error: null
    }
    this.handleCardChange = this.handleCardChange.bind(this)
    this.addCardToWallet = this.addCardToWallet.bind(this)
  }

  async componentDidMount() {
    const walletData = await walletsClient.getUserWallets()
    const selectableData = await cardsClient.getSelectableCards()
    this.setState({cards: walletData.data, selectableCards: selectableData.data, isLoading: false})
  }

  handleCardChange(_, __, selectedValue) {
    this.setState({ selectedValue })
  }

  async addCardToWallet() {
    const isSuccessful = await cardsClient.addCardToWallet({ card: this.state.selectedValue.id })
    console.log(isSuccessful);
    if (isSuccessful) {
      const newCards = this.state.cards.concat(this.state.selectedValue)
      const newSelectableCards =  this.state.selectableCards.filter((card) => {
        card.id !== this.state.selectedValue.id;
      })
      this.setState({ cards: newCards, selectableCards: newSelectableCards })
    } else {
      const error = { message: 'There was a problem saving your card. Please try again later' }
      this.setState({ error })
    }
  }

  render() {
    const { cards, isLoading, selectableCards, selectedValue } = this.state;
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
        <AddCardForm selectableCards={selectableCards} selectedValue={selectedValue} handleCardChange={this.handleCardChange} />

      </Loading>
    );
  }
}

export default CardsPage;
