import React, { Component } from 'react';
import Burger from '../burger.jpg';
import UserService from './UserService.js';



class Browse extends Component {
    constructor(props){
        super(props)

        this.state = {
            foodAvaliable:[]
            
        }
        this.addFood = this.addFood.bind(this);
        this.updateFood = this.updateFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
    }
    componentDidMount(){
        UserService.getFood().then((response)=>{
            this.setState({foodAvaliable:response.data})
        });
    }
    









    addFood(){
        this.props.history.push("add_food");
        
    }
    updateFood(id){
    this.props.history.push(`/update-food/${id}`);
    }
    pushtoCart(id){
        this.props.history.push(`/cart-food/${id}`);
        }

    deleteFood(id){
        UserService.deleteFood(id).then( res=> {
            this.setState({food: this.state.foodAvaliable.filter(food => food.id !==id)});
            this.props.history.push("/browse");
            window.location.reload(false)
        });
    }
   



    render(){
  return (
    <div className= "browseList_background">
    <div className= "browseList">

    {this.state.foodAvaliable.map(
    Food =>   



    <div className = "browseCardContainer">

    <img className = "cardImage" src={Burger}></img>


    <div className = "browseCardTitle">
        <h3>{Food.name}</h3>
    </div>
    <div className = "browseCardType">
        <p>{Food.type}</p>
    </div>
    <div className = "browseCardDesc">
        <p>{Food.description}</p>
    </div>
    <button onClick= { () => this.pushtoCart(Food.id)}>Add</button>
    <button onClick= { () => this.updateFood(Food.id)}>Update</button>
        <button onClick= { () => this.deleteFood(Food.id)}>Delete</button>
</div>




)}









{/* <Container>


<Row>
{this.state.foodAvaliable.map(
    Food =>   
<Col md ={4}>
    <Card style={{ width: '20rem', height:'14rem'}}>
        <Card.Img variant="top" src=""   />
        <Card.Body>
        <Card.Title> <p>{Food.name}</p></Card.Title>
        <Card.Text><description>{Food.description}</description></Card.Text>
        <button onClick= { () => this.pushtoCart(Food.id)}>Add</button>
        <button onClick= { () => this.updateFood(Food.id)}>Update</button>
        <button onClick= { () => this.deleteFood(Food.id)}>Delete</button>
        
        </Card.Body>
    </Card>
</Col>
)}
</Row> */}




<button className = "AddFoodBtn" onClick={this.addFood}>Add Food</button>



{/* </Container> */}
</div>
</div>
  );
}
}


export default Browse;