// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/basket';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import { StateType } from './constants/basket';

type PropsType = {
  actions: {
    addToBasket: (productId: number) => void,
    removeToBasket: (productId: number) => void,
  },
  basket: StateType,
};

class App extends Component<PropsType> {
  handleAddProduct = (productId: number): void => {
    this.props.actions.addToBasket({ id: productId });
  };

  handleRemoveProduct = (productId: number): void => {
    this.props.actions.removeToBasket({ id: productId });
  };

  render(): React.Element<string> {
    return (
      <div className="App">
        <ShoppingCart nbProducts={this.props.basket.length} />
        <ProductList
          handleAddProduct={this.handleAddProduct}
          handleRemoveProduct={this.handleRemoveProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, actionCreators), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
