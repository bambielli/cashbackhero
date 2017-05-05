import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <RaisedButton label="Cards" containerElement={<Link to="/cards" />} />
      </div>
    );
  }
}

export default HomePage;
