import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inBasket: false
    };
  }

  render() {
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
          <button onClick={this.handleRemoveProduct}>
            "SUPPRIMER DU PANIER"
          </button>
        ) : (
          <button onClick={this.handleAddProduct}>"AJOUTER AU PANIER"</button>
        )}
      </div>
    );
  }

  handleAddProduct = () => {
    this.props.handleAddProduct(this.props.id);
    this.setState(prevState => ({
      inBasket: true
    }));
  };

  handleRemoveProduct = () => {
    this.props.handleRemoveProduct(this.props.id);
    this.setState({ inBasket: false });
  };
}

export default Product;
