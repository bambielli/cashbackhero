import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import walletsClient from '../clients/wallets'

class CardsPage extends Component {
  constructor() {
    super()
    this.state = {
      'cards': []
    }
  }
  componentDidMount() {
    walletsClient.getUserWallets()
      .then(data => {
        this.setState({'cards': data.data})
      })
  }
  render() {
    const { cards } = this.state;
    return (
      <div>
        <ul>
          { cards.length ?
            cards.map((card)=>
              <li key={card.id}>{card.name}</li>
            ) :
            <span>{`You don't have any cards in your wallet`}</span>
          }
        </ul>

        <RaisedButton label="Home" containerElement={<Link to="/home" />} />
      </div>
    );
  }
}

export default CardsPage;
