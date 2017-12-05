// @flow

import React, { Component } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

type StateType = {
  productInBasket: Array<number>
};

class App extends Component<StateType> {
  constructor(props): void {
    super(props);
    this.state = {
      productInBasket: []
    };
  }

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

  handleAddProduct = (productId): void => {
    this.setState(prevState => {
      productInBasket: [...prevState.productInBasket, productId];
    });
  };

  handleRemoveProduct = (productId): void => {
    this.setState({
      productInBasket: this.state.productInBasket.filter(id => id !== productId)
    });
  };
}

export default App;
