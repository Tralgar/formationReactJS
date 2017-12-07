// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; // Manipuler la navigation en utilisant des actions redux (si on veut manipuler l'api navigateur avec redux) par exemple store.dispatch(push('/foo')); dans les actions
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import './scss/index.css';
import app from './reducers';
import ProductDetail from './ProductDetail';
import App from './App';

// Redux thunk nous permet de crééer des actions qui retournent des fonctions à la place d'objets (Voir action product, on peut faire des promises sans
// retourner un objet)

const history = createHistory();

const enhancers = [];
const middlewares = [thunkMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'developement') {
  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const store = createStore(app, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/p:id" exact component={ProductDetail} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
