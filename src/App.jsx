// @flow

import React, { Component } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  constructor(props): void {
    super(props);
    this.state = {
      productInBasket: [],
    };
  }

  handleAddProduct = (productId): void => {
    this.setState(prevState => [...prevState.productInBasket, productId]);
  };

  handleRemoveProduct = (productId): void => {
    this.setState({
      productInBasket: this.state.productInBasket.filter(
        id => id !== productId,
      ),
    });
  };

  render(): React.Element<string> {
    return (
      <div className="App">
        <ShoppingCart nbProducts={this.state.productInBasket.length} />
        <ProductList
          handleAddProduct={this.handleAddProduct}
          handleRemoveProduct={this.handleRemoveProduct}
        />
      </div>
    );
  }
}

export default App;
