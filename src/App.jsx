import React, { Component } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInBasket: []
    };
  }

  render() {
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

  handleAddProduct = productId => {
    let productInBasket = this.state.productInBasket;
    productInBasket.push(productId);
    this.setState({ productInBasket });
  };

  handleRemoveProduct = productId => {
    this.setState({
      productInBasket: this.state.productInBasket.filter(id => id !== productId)
    });
  };
}

export default App;
