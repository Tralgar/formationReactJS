// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
  handleAddProduct: () => void,
  handleRemoveProduct: () => void,
  id: number,
  name: string,
  price: number,
  image: string,
};

class Product extends Component<PropsType> {
  constructor(props): void {
    super(props);
    this.state = {
      inBasket: false,
    };
  }

  handleAddProduct = (): void => {
    this.props.handleAddProduct(this.props.id);
    this.setState({ inBasket: true });
  };

  handleRemoveProduct = (): void => {
    this.props.handleRemoveProduct(this.props.id);
    this.setState({ inBasket: false });
  };

  render(): React.Element<string> {
    return (
      <div className="product">
        PRODUIT :
        {this.props.id}
        <br />
        {this.props.name}
        <br />
        {this.props.price}
        <br />
        <img src={this.props.image} alt={this.props.name} />
        <br />
        {this.state.inBasket ? (
          <button onClick={this.handleRemoveProduct}>SUPPRIMER DU PANIER</button>
        ) : (
          <button onClick={this.handleAddProduct}>AJOUTER AU PANIER</button>
        )}
        <Link to={`/p${this.props.id}`}>Voir le produit</Link>
      </div>
    );
  }
}

export default Product;
