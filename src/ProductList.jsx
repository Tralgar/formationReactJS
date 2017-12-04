import React, { Component } from 'react';
import products from './products.json';
import Product from './Product';

class ProductList extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <ul>
          {products.map(product => (
            <Product
              handleAddProduct={this.props.handleAddProduct}
              handleRemoveProduct={this.props.handleRemoveProduct}
              key={product.id}
              {...product}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
