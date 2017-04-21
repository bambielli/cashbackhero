import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CardsPage extends Component {
  constructor() {
    super()
    this.state = {
      'cards': []
    }
  }
  componentDidMount() {
    console.log('mounted component')
    fetch('/api/cards', {
      accept: 'application/json'
    }).then((res)=>{
        if (res.ok) {
          return res
        } else {
          throw Error('cards fetch threw an error')
        }
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        this.setState({'cards': data.data})
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.cards.map((card)=>
            <li key={card.id}>{card.name}</li>
          )}
        </ul>

        <Link to="/home">TO HOME</Link>
      </div>
    );
  }
}

export default CardsPage;
