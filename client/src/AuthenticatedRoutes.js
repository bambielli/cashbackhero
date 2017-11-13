import React, { Component } from 'react';
import { whoAmI } from './clients/users';
import { node } from 'prop-types';

// this component does the initial auth check, and
// stores the authenticated information of the usser in local state.
export default class AuthenticatedRoutes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  async componentDidMount() {
    const user = await whoAmI()
    console.log('user is', user)
    this.setState({user})
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

AuthenticatedRoutes.propTypes = {
  children: node,
}