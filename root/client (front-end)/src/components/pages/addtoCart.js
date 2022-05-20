import React, { Component } from 'react';
import UserService from './UserService.js';

class addCart extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userid: '',
            name: '',
            type: '',
            restaurant_address: '',
            order_time: '',
            delivery_time:''


        }

        this.saveCart = this.saveCart.bind(this);

    }

    componentDidMount(){
        UserService.getFoodById(this.state.id).then( (res) =>{
            let userCart = res.data;
            this.setState({
                id:userCart.id,
                user_id:1,
                name: userCart.name,
                type: userCart.type,
                restaurant_address: userCart.restaurant_address,
                order_time: Date().toLocaleString(),
                delivery_time:30
            });
        });
    }

  saveCart =(e)=>{
    e.preventDefault();
    let userCart = {id:this.state.id,user_id: this.state.user_id,name: this.state.name,
      type: this.state.type,
      restaurant_address: this.state.restaurant_address}
      console.log('userCart=> ' +JSON.stringify(userCart));

      let pastOrder = {id:this.state.id,user_id: this.state.user_id,delivery_time: this.state.delivery_time,
        order_time: this.state.order_time,
      restaurant_address: this.state.restaurant_address}
      console.log('pastOrder=> ' +JSON.stringify(pastOrder));

      UserService.addCart(userCart).then(res =>{
        this.props.history.push('/browse');
      });
      UserService.addPastOrder(pastOrder).then(res =>{
        this.props.history.push('/browse');
      });
  }




      cancel(){
          this.props.history.push('/browse');
      }
  


    render(){
        return (
            <div>
                    <div className= "browseList_background"></div>
                    <div className= "confirmToCartBox">
<form>
    <p>Are you sure you want to add this item</p>
        <button type ="submit" name="" value="submit" variant = "success" onClick={this.saveCart}>Confirm</button>
        <button type ="submit" name="" value="cancel" variant = "success" onClick={this.cancel.bind(this)}>Cancel</button>
        </form>


                    </div>
                    
            </div>
        )
    }
}
export default addCart;