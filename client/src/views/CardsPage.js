import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import cardsClient from '../clients/cards'

class CardsPage extends Component {
  constructor() {
    super()
    this.state = {
      'cards': []
    }
  }
  componentDidMount() {
    cardsClient.getCards()
      .then(data => {
        this.setState({'cards': data.data})
      })
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.cards.map((card)=>
              <li key={card.id}>{card.name}</li>
            )
          }
        </ul>

        <RaisedButton label="Home" containerElement={<Link to="/home" />} />
      </div>
    );
  }
}

export default CardsPage;
