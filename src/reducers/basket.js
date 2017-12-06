// @flow

import { StateType, ActionType } from '../constants/basket';

const basket = (state: StateType = [], action: ActionType) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return [...state, action.payload];
    case 'REMOVE_TO_BASKET':
      return state.filter((element: StateType) => element.id !== action.payload.id);
    default:
      return state;
  }
};

export default basket;
