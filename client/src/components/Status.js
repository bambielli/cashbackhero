import React from 'react';
import { string, func, bool } from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

export default function Status({ message, open, handleOpenChange }) {
  function handleRequestClose() {
    handleOpenChange(false)
  }

  return (
    <Snackbar
      action="X"
      message={message}
      open={open}
      onActionTouchTap={handleRequestClose}
      onRequestClose={handleRequestClose}
      autoHideDuration={5000}
    />
  )
}

Status.propTypes = {
  message: string,
  handleOpenChange: func,
  open: bool
}