import React from 'react'
import data from '../../data/beers'
import BeerList from './BeerList'

class Listing extends React.Component{
    
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (

<div>
<p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

<BeerList beer={data.beers}/>



    </div>
        )
    }
}
    
export default Listing