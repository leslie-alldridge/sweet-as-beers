import React from "react";

import { CartListItem } from "./Index";

const CartList = props => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Beer</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.cart.length > 0 ? null : <p>You have no items in your cart.</p>}
        {props.cart.map(cartItem => {
          return (
            <CartListItem
              name={cartItem.name}
              quantity={cartItem.quantity}
              id={cartItem.id}
              key={cartItem.id}
              updateItem={props.updateItem}
              deleteItem={props.deleteItem}
            />
          );
        })}
      </tbody>
    </table>

    <p className="actions">
      <a id="link" onClick={props.returnToListing}>
        Continue shopping
      </a>
      <button onClick={props.submitUpdate}>Update</button>
      <button onClick={props.goToCheckout} className="button-primary">
        Checkout
      </button>
    </p>
  </div>
);

export default CartList;
