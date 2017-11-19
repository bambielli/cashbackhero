import React from 'react';
import { array, func, bool, number } from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function AddCardForm({ selectedValue, selectableCards, handleCardChange }) {
  return (
      <SelectField
        floatingLabelText="Add a card to your wallet"
        value={selectedValue}
        onChange={handleCardChange}
      >
        <MenuItem value={null} primaryText="" />
        {
          selectableCards.map((card) => {
          return ( <MenuItem key={card.id} value={card} primaryText={card.name} /> )
          })
        }
      </SelectField>
  )
}

AddCardForm.propTypes = {
  isLoading: bool,
  selectedValue: number,
  selectableCards: array,
  handleCardChange: func,
}