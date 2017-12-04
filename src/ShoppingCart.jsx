// @flow

import React from 'react';

type Props = {
  nbProducts: number
};

const ShoppingCart = (props: Props) => {
  return (
    <div className="shoppingcart">
      NOMBRE DE PRODUITS DANS LE PANIER : {props.nbProducts}
    </div>
  );
};

ShoppingCart.propTypes = {
  nbProducts: PropTypes.number
};

export default ShoppingCart;
