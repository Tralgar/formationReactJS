// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/products';
import Product from './Product';
import { PayloadType, ThunkAction } from './constants/products';

type PropsType = {
  handleAddProduct: () => void,
  handleRemoveProduct: () => void,
  actions: {
    fetchProducts: () => ThunkAction,
  },
  products: PayloadType,
};

class ProductList extends PureComponent<PropsType> {
  handleClick = (): void => {
    this.props.actions.fetchProducts();
  };

  render(): React.Element<string> {
    if (this.props.products.errorMessage) {
      return <div>ERREUR : {this.props.products.errorMessage}</div>;
    } else if (this.props.products.isLoading) {
      return <div>EN CHARGEMENT....</div>;
    } else if (this.props.products.results) {
      return (
        <div>
          <br />
          <br />
          <ul>
            {this.props.products.results.map(product => (
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
    return <button onClick={this.handleClick}>CLIC TO CHARGE</button>;
  }
}

const mapStateToProps = state => ({
  products: state.products, // Ici le state.products est l'objet retourné par le reducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, actionCreators), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
