import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { node } from 'prop-types';
import Logout from './components/Logout';
import Loading from './components/Loading';
import { whoAmI } from './clients/users';

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
    this.setState({user})
  }

  render() {
    const isLoading = this.state.user == null;
    const children = this.props.children;
    return (
      <Loading isLoading={isLoading}>
        <div>
          <AppBar
            title="CashBackHero"
            iconElementRight={<Logout />}
          />
          {children}
        </div>
      </Loading>
    )
  }
}

AuthenticatedRoutes.propTypes = {
  children: node,
}