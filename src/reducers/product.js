// @flow

import {
  StateType,
  ActionType,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
} from '../constants/product';

const product = (state: StateType = { isLoading: false }, action: ActionType): StateType => {
  switch (action.type) {
    case FETCH_PRODUCT:
    case FETCH_PRODUCT_SUCCESS:
    case FETCH_PRODUCT_ERROR: {
      const { isLoading, result, errorMessage } = action.payload;
      return { ...state, isLoading, result, errorMessage };
    }
    default:
      return state;
  }
};

export default product;
