import React from "react";

const CartListItem = props => (
  <div>
    <tr>
      <td>{props.name}</td>
      <td>
        <input
          className="update-input"
          onChange={e => props.updatesItem(props.id, e.target.value)}
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
  </div>
);

export default CartListItem;
