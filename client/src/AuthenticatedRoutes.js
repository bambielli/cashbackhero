import React, { Component } from 'react';
import { whoAmI } from './clients/users';
import { node } from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

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
    return (
      <div>
        {
          isLoading ?
          <div className="centered">
            <CircularProgress />
          </div> :
          <div>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

AuthenticatedRoutes.propTypes = {
  children: node,
}