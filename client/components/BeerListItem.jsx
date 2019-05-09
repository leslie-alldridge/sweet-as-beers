import React from 'react'

const BeerListItem = (props) => (
  <div className="beer" key = {props.id}>
    <p className="name">{props.name}</p>
    <p className="description">{props.brewery}</p>
    <p>{props.style}</p>
    <p>
      <span className="country">{props.country}</span>
      <span className="abv">{props.abv}</span>
      <a onClick={() => {props.addToCart(props.id, props.name)}} className="cart-link">Add to cart</a>
    </p>
  </div>
  )

  export default BeerListItem