export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export type Products = Array<{
  id: number,
  name: string,
  price: string,
  currencySymbol: string,
  currencyCode: string,
  image: string,
  description: string,
}>;

export type PayloadType = {
  +isLoading: boolean,
  results?: Products,
  errorMessage?: string,
};

export type StateType = PayloadType;

export type FetchProductsAction = { type: FETCH_PRODUCTS, payload: PayloadType };
export type FetchProductsSuccessAction = { type: FETCH_PRODUCTS_SUCCESS, payload: PayloadType };
export type FetchProductsErrorAction = { type: FETCH_PRODUCTS_ERROR, payload: PayloadType };

export type ActionType =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction;

/* eslint-disable no-use-before-define */
type GetState = () => PayloadType;
type PromiseAction = Promise<ActionType>;
type Dispatch = (action: ActionType | ThunkAction | PromiseAction | Array<ActionType>) => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
/* eslint-disable no-use-before-define */
