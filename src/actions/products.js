// @flow

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ThunkAction,
} from '../constants/products';

import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  ProductThunkAction,
} from '../constants/product';

export const fetchProducts = (): ThunkAction => dispatch => {
  dispatch({ type: FETCH_PRODUCTS, payload: { isLoading: true } });
  fetch('/products')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: { isLoading: false, results: json } });
    })
    .catch(error => {
      dispatch({ type: FETCH_PRODUCTS_ERROR, payload: { isLoading: false, errorMessage: error } });
    });
};

export const fetchProduct = (id: number): ProductThunkAction => dispatch => {
  dispatch({ type: FETCH_PRODUCT, payload: { isLoading: true } });
  fetch(`/products/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: { isLoading: false, result: json } });
    })
    .catch(error => {
      dispatch({ type: FETCH_PRODUCT_ERROR, payload: { isLoading: false, errorMessage: error } });
    });
};
