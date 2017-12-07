// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/products';
import { PayloadType, ProductThunkAction } from './constants/product';

type PropsType = {
  actions: {
    fetchProduct: () => ProductThunkAction,
  },
  product: PayloadType,
};

class ProductDetail extends PureComponent<PropsType> {
  componentWillMount() {
    if (this.props.match) {
      this.props.actions.fetchProduct(this.props.match.params.id);
    }
  }

  render(): React.Element<string> {
    if (this.props.product.errorMessage) {
      return <div>ERREUR : {this.props.product.errorMessage}</div>;
    } else if (this.props.product.result) {
      return (
        <div className="product">
          PRODUIT :
          {this.props.product.result.id}
          <br />
          {this.props.product.result.name}
          <br />
          {this.props.product.result.price}
          <br />
          <img src={this.props.product.result.image} alt={this.props.product.result.name} />
          <br />
          <p dangerouslySetInnerHTML={{ __html: this.props.product.result.description }} />
        </div>
      );
    }

    return <div>EN CHARGEMENT....</div>;
  }
}

const mapStateToProps = state => ({
  product: state.product, // Ici le state.products est l'objet retourné par le reducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, actionCreators), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
