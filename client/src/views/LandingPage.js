import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from '../App.css';
import RaisedButton from 'material-ui/RaisedButton';

class LandingPage extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to Cashbackhero</h2>
        </div>
        <RaisedButton label="Login" href="/login" />
      </div>
    );
  }
}

export default LandingPage;
