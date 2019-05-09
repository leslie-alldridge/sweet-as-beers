import React from 'react'
import BeerListItem from './BeerListItem';
import {navigate, addToCart} from '../actions/index'
import {connect} from 'react-redux'

const BeerList = (props) => (
  <div>
    {props.beer.map(beer => {
      return  <div key={beer.id}><BeerListItem addToCart={props.addToCart} id={beer.id} name={beer.name} brewery={beer.brewery} style={beer.style} country={beer.country} abv={beer.abv}/></div>})}
  </div>
  )

  function mapStateToProps(state){
    return{
    beers: state.beers
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id, name) =>
      {dispatch(addToCart(id, name))
      dispatch(navigate('cart'))
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(BeerList)