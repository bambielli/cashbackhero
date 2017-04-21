import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import CardsPage from './views/CardsPage.js'
import HomePage from './views/HomePage.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/home" component={HomePage} />
          <Route path="/cards" component={CardsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
