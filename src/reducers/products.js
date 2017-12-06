// @flow

import {
  StateType,
  ActionType,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../constants/products';

const products = (state: StateType = { isLoading: false }, action: ActionType): StateType => {
  switch (action.type) {
    case FETCH_PRODUCTS:
    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_PRODUCTS_ERROR: {
      const { isLoading, results, errorMessage } = action.payload;
      return { ...state, isLoading, results, errorMessage };
    }
    default:
      return state;
  }
};

export default products;
