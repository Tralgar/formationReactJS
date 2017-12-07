// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import basket from './basket';
import products from './products';
import product from './product';

const app = combineReducers({ basket, products, product, form: formReducer, router: routerReducer });

export default app;
