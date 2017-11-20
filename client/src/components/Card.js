import React, { Component } from 'react'
import { object, func } from 'prop-types'
import Loading from './Loading'
import FlatButton from 'material-ui/FlatButton'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
    this.delFromWallet = this.delFromWallet.bind(this)
  }

  delFromWallet(event) {
    this.setState({isLoading: true})
    this.props.deleteFromWallet(event)
  }

  render() {
    const card = this.props.card
    const isLoading = this.state.isLoading
    return (
      <Loading isLoading={isLoading}>
        <li key={card.id}>
          {card.name}
          <FlatButton
            label="X"
            secondary={true}
            value={JSON.stringify(card)}
            onClick={this.delFromWallet}
          />
        </li>
      </Loading>
    )
  }
}

Card.propTypes = {
  card: object,
  deleteFromWallet: func,
}