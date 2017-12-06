// @flow

import { combineReducers } from 'redux';
import basket from './basket';
import products from './products';

const app = combineReducers({ basket, products });

export default app;
