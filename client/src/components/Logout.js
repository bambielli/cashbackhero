import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Logout extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Logout" href="/logout" />
    );
  }
}