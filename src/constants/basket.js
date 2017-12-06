export type PayloadType = {
  id: number,
  qty: number,
};

export type AddToBasketActionType = { type: 'ADD_TO_BASKET', payload: PayloadType };
export type RemoveToBasketActionType = { type: 'REMOVE_TO_BASKET', payload: PayloadType };

export type StateType = Array<PayloadType>;
export type ActionType = AddToBasketActionType | RemoveToBasketActionType;
