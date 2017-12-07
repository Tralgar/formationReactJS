export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

export type Product = {
  id: number,
  name: string,
  price: string,
  currencySymbol: string,
  currencyCode: string,
  image: string,
  description: string,
};

export type PayloadType = {
  +isLoading: boolean,
  result?: Product,
  errorMessage?: string,
};

export type StateType = PayloadType;

export type FetchProductAction = { type: FETCH_PRODUCT, payload: PayloadType };
export type FetchProductSuccessAction = { type: FETCH_PRODUCT_SUCCESS, payload: PayloadType };
export type FetchProductErrorAction = { type: FETCH_PRODUCT_ERROR, payload: PayloadType };

export type ActionType = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction;

/* eslint-disable no-use-before-define */
type GetState = () => PayloadType;
type PromiseAction = Promise<ActionType>;
type Dispatch = (
  action: ActionType | ProductThunkAction | PromiseAction | Array<ActionType>,
) => any;
export type ProductThunkAction = (dispatch: Dispatch, getState: GetState) => any;
/* eslint-disable no-use-before-define */
