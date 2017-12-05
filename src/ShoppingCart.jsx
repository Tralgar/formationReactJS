// @flow

import React from 'react';

type Props = {
  nbProducts: number,
};

const ShoppingCart = (props: Props): React.Element<string> => (
  <div className="shoppingcart">
    NOMBRE DE PRODUITS DANS LE PANIER : {props.nbProducts}
  </div>
);

export default ShoppingCart;
