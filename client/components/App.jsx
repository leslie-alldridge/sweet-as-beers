import React from 'react'
import {connect} from 'react-redux'
import Listing from './Listing'
import Header from './Header'
import Checkout from './checkout'
import Cart from './Cart'

const App = (props) => {
  console.log(props);
  
    return (
      <div className='app'>
        <Header />
        {props.showListing === 'showListing' ? <Listing /> : props.showListing === 'showCheckout' ? <Checkout/> : <Cart />}
      </div>
    )
  }

function mapStateToProps(state){
  return {
    showListing: state.navReducer
  }
}

export default connect(mapStateToProps)(App)

