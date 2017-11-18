import React from 'react';
import { node, bool } from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

export default function Loading({ isLoading, children }) {
  return(
    <div> { isLoading ? <CircularProgress /> : <div> { children } </div> } </div>
  )
}

Loading.propTypes = {
  isLoading: bool,
  children: node,
}