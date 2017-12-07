// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loadable from 'react-loadable';
import * as actionCreators from './actions/products';
import { PayloadType, ThunkAction } from './constants/products';
import { Link } from 'react-router-dom';

type PropsType = {
  handleAddProduct: () => void,
  handleRemoveProduct: () => void,
  actions: {
    fetchProducts: () => ThunkAction,
  },
  products: PayloadType,
};

const Loading = () => <div>EN CHARGEMENT DE LOADABLE</div>;

const LoadableProduct = Loadable({
  loader: () => import('./Product'),
  loading: Loading,
  delay: 300,
  render(loaded, props) {
    const Product = loaded.default;
    return <Product {...props} />;
  },
});

class ProductList extends PureComponent<PropsType> {
  //  componentWillMount() {
  //    this.props.actions.fetchProducts();
  //  }

  handleClick = (): void => {
    this.props.actions.fetchProducts();
  };

  //  HandleMouseOver = () => {
  //    LoadableProduct.preload();
  //  };

  render(): React.Element<string> {
    if (this.props.products.errorMessage) {
      return <div>ERREUR : {this.props.products.errorMessage}</div>;
    } else if (this.props.products.isLoading) {
      return <div>EN CHARGEMENT....</div>;
    } else if (this.props.products.results && this.props.products.results.length) {
      return (
        <div>
          <Link to="/register">REGISTER YOUR FACE</Link>
          <br />
          <br />
          <ul>
            {this.props.products.results.map(product => (
              <LoadableProduct
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
