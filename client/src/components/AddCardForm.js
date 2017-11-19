import React from 'react';
import { array, func, bool, object } from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function AddCardForm({ selectedCard, selectableCards, handleCardChange }) {
  return (
    <div>
      <SelectField
        floatingLabelText="Add a card to your wallet"
        value={selectedCard}
        onChange={handleCardChange}
      >
        <MenuItem value={null} primaryText="" />
        {
          selectableCards.map((card) => {
          return ( <MenuItem key={card.id} value={card} primaryText={card.name} /> )
          })
        }
      </SelectField>
    </div>
  )
}

AddCardForm.propTypes = {
  isLoading: bool,
  selectedCard: object,
  selectableCards: array,
  handleCardChange: func,
}