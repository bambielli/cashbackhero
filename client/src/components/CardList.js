import React from 'react'
import { array, func } from 'prop-types'
import Card from './Card'

export default function CardList({cards, deleteFromWallet}) {
  return (
    <ul>
      {
        cards.length ?
        cards.map((card)=> <Card key={card.id} card={card} deleteFromWallet={deleteFromWallet} />)
        : <li>{`You don't have any cards in your wallet`}</li>
      }
    </ul>
  )
}

CardList.propTypes = {
  cards: array,
  deleteFromWallet: func,
}