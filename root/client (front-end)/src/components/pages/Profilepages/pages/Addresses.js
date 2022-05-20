// import React from 'react';
// import { AddressesData } from '../Data/AddressesData';

import React, { Component } from 'react'
import axios from "axios";

export default class Addresses extends Component {

  constructor(props){
    super(props);
    this.state = {
      AddressesData : [],
      isloaded : false
    }
  }

  componentDidMount(){
    const access_token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQGIuY29tIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiYXV0aG9yaXR5IjoidXNlcjpyZWFkIn1dLCJpYXQiOjE2MTQxNjI2NTUsImV4cCI6MTYxNDcwOTgwMH0.gxNoRg5V5I3XGPwpMRhZyfNs5aZWGZd1W0ycEs-G0vL2fB9pRrQZhlYMVnG1x9b7WJEYPkfd3ad7DQCnZuQVIw';
    const api = 'http://localhost:8080/api/v1/users/addressData';

    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${access_token}`;
        return config;
      },
      error =>{
        return Promise.reject(error);
      }
    );
    axios.get(api).then((response)=>{
            // response.json()
            console.log(response.data);
            this.setState({
              isloaded : true,
              AddressesData : response.data
            });
          })
  }


  render() {

    var{isloaded, AddressesData} = this.state;

    if(!isloaded){
      return(
        <div className="container">
           <div class="loader"></div>
        </div>
      )
    }


    return (
<div className="container">
    {AddressesData.map((item,index)=>{
        return(
        <div className="column" key={item.addressID}>
          <div className="card_add">
            <div className="add_details">
              <p className="address"><span>Street :</span><span></span> {item.street}</p>
              <p className="house_no"><span>House number :</span><span></span>{item.houseNumber}</p>
              <p className="city"><span>City :</span><span></span> {item.city}</p>
              <p className="code"><span>Post Code :</span><span></span> {item.postCode}</p>
              <p className="mark"><span>LandMark :</span><span></span> {item.landMark}</p>
              <div className="btn_add">
                <button className="button">Edit</button>  
                <button className="button">Delete</button>
              </div>
            </div>
          </div>
        </div>
        );
    })}
</div>
    )
  }
}




// function Addresses() {
//   return (
//     <div className="container">
//     {AddressesData.map((item,index)=>{
//         return(
//         <div className="column">
//           <div className="card_add">
//             <div className="add_details">
//             <p className="address"><span>Street :</span><span></span> {item.Address}</p>
//             <p className="house_no"><span>House number :</span><span></span>{item.House_no}</p>
//             <p className="city"><span>City :</span><span></span> {item.City}</p>
//             <p className="code"><span>Post Code :</span><span></span> {item.Postcode}</p>
//             <p className="mark"><span>LandMark :</span><span></span> {item.LandMark}</p>
//             <div className="btn_add">
//             <button className="button">Edit</button>  
//             <button className="button">Delete</button>
//             </div>
//               </div>
//          </div>
//         </div>
//         );
//     })}
// </div>
//   );
// }

// export default Addresses;
