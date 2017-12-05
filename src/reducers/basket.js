// @flow

import { AddToBasketActionType, RemoveToBasketActionType, StateType } from '../constants/basket';

const basket = (
  state: StateType = [],
  action: AddToBasketActionType | RemoveToBasketActionType,
) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return [...state.basket, action.payload.id];
    case 'REMOVE_TO_BASKET':
      return state.filter((element: StateType) => element.id !== action.payload.id);
    default:
      return state;
  }
};

export default basket;
