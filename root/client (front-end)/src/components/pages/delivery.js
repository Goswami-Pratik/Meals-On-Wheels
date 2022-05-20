import React, { Component } from 'react';
import DeliveryGif from '../loading.gif'


class Delivery extends Component {
    constructor(props){
        super(props)

    }


    render(){
  return (
    <div className= "delivery_background">
<div className = "deliverytext">


</div>


<img className = "deliveryGif" src={DeliveryGif} alt="loading..." />





</div>
  );
}
}


export default Delivery;