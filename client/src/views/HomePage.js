import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h2>Logged in user dashboard</h2>
        <RaisedButton label="Cards" containerElement={<Link to="/cards" />} />
      </div>
    );
  }
}

export default HomePage;
