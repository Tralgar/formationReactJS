// @flow

import { PayloadType, AddToBasketActionType, RemoveToBasketActionType } from '../constants/basket';

export const addToBasket = (payload: PayloadType): AddToBasketActionType => ({
  type: 'ADD_TO_BASKET',
  payload,
});

export const removeToBasket = (payload: PayloadType): RemoveToBasketActionType => ({
  type: 'REMOVE_TO_BASKET',
  payload,
});
