// import React, {useState} from 'react';
// import { FavouritesData } from '../Data/FavouritesData';

import axios from "axios"
import React, { Component } from 'react'
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md'
import authHeader from "../../Login/authHeader";

export default class Favourites extends Component {

  constructor(props){
    super(props);
    this.state = {
      FavouritesData : [],
      isloaded : false,
      ProfileData : []
    }
  }

  componentDidMount(){
    const api = 'http://localhost:8080/api/v1/users/favData';
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
            // response.json()
            //console.log(response.data);
            // console.log("now test Fav "+ response.data);
            this.setState({
              FavouritesData : response.data
            });
          })

          axios.get("http://localhost:8080/api/v1/users/").then((response)=>{
            // response.json()
            // console.log("Profile data ID "+response.data.id);
            // console.log("now test Favourite "+response.data);
            this.setState({
              isloaded : true,
              ProfileData : response.data
            });
          })
  }


  render() {

    var{isloaded, FavouritesData, ProfileData} = this.state;

    var final_favourites = [];
    for(var i=0;i<FavouritesData.length;i++){
      if(JSON.stringify(FavouritesData[i].favUserID) == ProfileData.id){
        final_favourites.push((FavouritesData[i]));
      }
    }

    if(!isloaded){
      return(
        <div className="container">
          <div class="loader"></div>
        </div>
      )
    }

    if(final_favourites.length == 0){
      return(
        <div className="container">
          <h1>No Favourites Yet!</h1>
        </div>
      )
    }

    // console.log("final fav length "+final_favourites.length);

    // for(var j=0;j<final_favourites.length;j++){
    //   // console.log("final fav[0] "+final_favourites[0])
    //   return(
    //     <div className="container">
    //       <h1>{final_favourites[j]}</h1>
    //     </div>
    //   )
    // }

    return (
      <div className="container"> 
      {final_favourites.map((item,index)=>{
          return(
          // <div className="row">
          <div className="column" key={item.favID}>
            <div className="card">
              <div className="res_details">
              <p className="res_name">{item.favRestaurantName}</p>
              <p className="res_add">{item.favRestaurantAddress}</p>
              <p className="rating">Rating 3.8 {item.favRestaurantRating}</p>
              <div className="btn">
              <button className="button">Order</button>    <button className="button">Help</button>
              </div>
                <img src={"Users/sagiruthvik/Documents/final_group_project/Front-End/client/src/components/pages/Profilepages/images/"+item.OrderImg}></img>
                </div>
                <div className="order_details">
              <h3 className="item">{item.favItem}</h3>
              <p className="price">Price : £{item.favItemCost}</p>
              <p className="es_time"><AiIcons.AiOutlineFieldTime />{item.orderDeliveryDate}</p>
              <p className="offer1"><MdIcons.MdLocalOffer /> {item.favItemDiscount}</p>
              <p className="offer2"><MdIcons.MdLocalOffer /> {item.favItemDiscount}</p>
              </div>
            </div>
           </div>
      //   </div>
          );
      })}
  </div>
    );
    
  }
}


// function Favourites() {
//   const [show,setShow] = useState(true);
//   return (
//     <div className="container"> 
//     {FavouritesData.map((item,index)=>{
//         return(
//         // <div className="row">
//         <div className="column" key={index}>
//           <div className="card">
//             <div className="res_details">
//             <p className="res_name">{item.restaurant_name}</p>
//             <p className="res_add">{item.restaurant_address}</p>
//             <p className="rating">Rating 3.8 {item.rating}</p>
//             <div className="btn">
//             <button className="button">Order</button>    <button className="button">Help</button>
//             </div>
//               <img src={item.images}></img>
//               </div>
//               <div className="order_details">
//             <h3 className="item">{item.title}</h3>
//             <p className="price">Price : {item.rupess}{item.newPrice}</p>
//             <p className="es_time">{item.time_ic} {item.delivery_time}</p>
//             <p className="offer1">{item.offer} 60% off | Use WELCOMEBACK</p>
//             <p className="offer2">{item.offer} upto £5 Amazonpay cashback</p>
//             </div>
//           </div>
//          </div>
//     //   </div>
//         );
//     })}
// </div>
//   );
// }

// export default Favourites;
