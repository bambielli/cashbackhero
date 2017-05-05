import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import CardsPage from './views/CardsPage.js'
import HomePage from './views/HomePage.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <Route path="/home" component={HomePage} />
            <Route path="/cards" component={CardsPage} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
