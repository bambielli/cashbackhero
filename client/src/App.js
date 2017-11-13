import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardsPage from './views/CardsPage.js'
import HomePage from './views/HomePage.js'
import LandingPage from './views/LandingPage.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AuthenticatedRoutes from './AuthenticatedRoutes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <AuthenticatedRoutes>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/cards" component={CardsPage} />
            </AuthenticatedRoutes>
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
