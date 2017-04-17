import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.cards.map((card)=>
            <li key={card.id}>{card.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
