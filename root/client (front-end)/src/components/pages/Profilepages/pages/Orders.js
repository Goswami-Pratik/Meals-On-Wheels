import React, { Component} from 'react'
import axios from "axios";
import authHeader from "../../Login/authHeader";
import FAQ from "../../FAQ";

export default class Orders extends Component {

  constructor(props){
    super(props);
    this.state = {
      OrdersData : [],
      isloaded : false,
      ProfileData : []
    }
  }

  componentDidMount(){
    const api = 'http://localhost:8080/api/v1/users/ordersData';
    let checkAccessToken = authHeader().token;
    let accessToken = "";
    if(checkAccessToken !== undefined) {
      accessToken = authHeader().token.toString();
    }
    axios.interceptors.request.use(
      config => {
        config.headers.authorization = accessToken;
        return config;
      },
      error =>{
        return Promise.reject(error);
      }
    );
    axios.get(api).then((response)=>{
            
            this.setState({
              OrdersData : response.data
            });
          })

          axios.get("http://localhost:8080/api/v1/users/").then((response)=>{
            // console.log("now test Order "+response.data);
            this.setState({
              isloaded : true,
              ProfileData : response.data
            });
          })
  }

  render() {

    var{isloaded, OrdersData, ProfileData} = this.state;

    var final_orders = [];
    for(var i=0;i<OrdersData.length;i++){
      if(JSON.stringify(OrdersData[i].orderUserID) == ProfileData.id){
        final_orders.push(OrdersData[i]);
      }
    }

    if(!isloaded){
      return(
        <div className="container">
          <div class="loader"></div>
        </div>
      )
    }

    if(final_orders.length == 0){
      return(
        <div className="container">
          <h1>No Orders Yet!</h1>
        </div>
      )
    }

     return (

      <div className="container">
        {final_orders.map((item,index)=>{
          return(
            <div className="column" key={index}>
            <div className="card">
              <div className="res_details">
              <p className="res_name">{item.orderRestaurantName}</p>
              <p className="res_add">{item.orderRestaurantAddress}</p>
              <p className="order_no">Order{item.orderNumber}</p>
              <div className="btn">
              <button className="button">Reorder</button>   <button className="button" src={FAQ}>Help</button>
              </div>
                <img src={"Users/sagiruthvik/Documents/final_group_project/Front-End/client/src/components/pages/Profilepages/images/"+item.OrderImg}></img>
                </div>
                <div className="order_details">
                <h2 className="or_de">Order details</h2>
              <h3 className="item">{item.orderName} {item.orderQuantity}</h3>
              <p className="price">Paid : £{item.orderPrice}</p>
              <p className="or_date">Orderd on {item.orderDate}</p>
              <p className="del_date">Delivered on {item.orderDeliveryDate}</p>
              </div>
            </div>
           </div>
          )
        })}
  </div>
    )
  }
}