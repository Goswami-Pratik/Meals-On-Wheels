import React, { Component } from 'react';
import UserService from './UserService.js';

class UpdateFood extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            type: '',
            restaurant_address:''



        }
        this.changefoodNameHandler = this.changefoodNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changefoodTypeHandler = this.changefoodTypeHandler.bind(this);
        this.changeRestAddressHandler = this.changeRestAddressHandler.bind(this);
        this.updateFood = this.updateFood.bind(this);


        
    }
    componentDidMount(){
        UserService.getFoodById(this.state.id).then( (res) =>{
            let food = res.data;
            this.setState({name: food.name,
                type: food.type,
                description : food.description,
                restaurant_address:food.restaurant_address
            });
        });
    }

    updateFood = (e) => {
        e.preventDefault();
        let food = {name: this.state.name,
            type: this.state.type, 
            description: this.state.description,
            restaurant_address:this.state.restaurant_address};
        console.log('food=> ' +JSON.stringify(food));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateFood(food, this.state.id).then( res => {
            this.props.history.push('/browse');
        });
    }

      cancel(){
          this.props.history.push('/browse');
      }
  

    changefoodNameHandler =(event) => {
        this.setState({name: event.target.value});
    }
    changeDescriptionHandler =(event) => {
        this.setState({description: event.target.value});
    } 
    changefoodTypeHandler =(event) => {
        this.setState({type: event.target.value});
    }
    changeRestAddressHandler =(event) => {
        this.setState({restaurant_address: event.target.value});
    }


    render(){
        return (
            <div>
                    <div className= "browseList_background"></div>
                    <div className= "checkoutbox">
<form>
        <p>Food Name</p>
        <input type ="text" name="food name" placeholder="enter food name"
        value = {this.state.name} onChange = {this.changefoodNameHandler}></input>
        <p>Food type</p>
        <input type ="text" name="food type" placeholder="enter food type"
        value = {this.state.type} onChange = {this.changefoodTypeHandler}></input>
        <p>Description</p>
        <input type ="text" size ="70" name="description" placeholder="enter description"
        value = {this.state.description} onChange = {this.changeDescriptionHandler}></input>
        <p>Restaurant Address</p>
        <input type ="text" size ="70" name="address" placeholder="enter address"
        value = {this.state.restaurant_address} onChange = {this.changeRestAddressHandler}></input>
        <button type ="submit" name="" value="submit" variant = "success" onClick={this.updateFood}>Confirm</button>
        <button type ="submit" name="" value="cancel" variant = "success" onClick={this.cancel.bind(this)}>Cancel</button>
        </form>


                    </div>
                    
            </div>
        )
    }
}
export default UpdateFood;