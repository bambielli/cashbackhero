import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import walletsClient from '../clients/wallets'
import Loading from '../components/Loading'

class CardsPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      cards: []
    }
  }

  async componentDidMount() {
    const data = await walletsClient.getUserWallets()
    this.setState({cards: data.data, isLoading: false})
  }
  render() {
    const { cards, isLoading } = this.state;
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
        <RaisedButton label="Home" containerElement={<Link to="/home" />} />
      </Loading>
    );
  }
}

export default CardsPage;
