import React from "react";

const Order = props => (
  <div>
    {console.log(props)}
    <p>Order Details</p>
    <p>Status: {props.order.status}</p>
    <ul>
      {props.cart.map(item => {
        return (
          <li>
            {item.name} x {item.quantity}
          </li>
        );
      })}
    </ul>
  </div>
);

export default Order;
