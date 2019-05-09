import React from "react";

const CartListItem = props => (
  <tr>
    <td>{props.name}</td>
    <td>
      <input
        className="update-input"
        type="number"
        onChange={e => props.updateItem(props.id, e.target.value)}
        value={props.quantity}
      />
    </td>
    <td>
      <button>
        <span
          className="fa fa-trash fa-2x"
          onClick={() => props.deleteItem(props.id)}
        />
      </button>
    </td>
  </tr>
);

export default CartListItem;
