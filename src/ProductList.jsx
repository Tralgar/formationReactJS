// @flow

import React, { PureComponent } from 'react';
import products from './products.json';
import Product from './Product';

type PropsType = {
  handleAddProduct: (productId: number) => void,
  handleRemoveProduct: (productId: number) => void,
};

class ProductList extends PureComponent<PropsType> {
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
