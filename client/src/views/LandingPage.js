import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cashbackhero</h2>
        </div>
        <RaisedButton label="Login" href="/login" />
      </div>
    );
  }
}

export default LandingPage;
