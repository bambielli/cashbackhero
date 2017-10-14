import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardsPage from './views/CardsPage.js'
import HomePage from './views/HomePage.js'
import LandingPage from './views/LandingPage.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/cards" component={CardsPage} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
