// import React,{useState} from 'react';
import Modal from 'react-modal'
// import { Profiledata } from '../Data/Profiledata';

import React, { Component } from 'react';
import axios from "axios";
import authHeader from "../../Login/authHeader";

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      ProfileData : [],
      isloaded : false,
      modalIsOpen : false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen : true});
  }

  closeModal(){
    this.setState({modalIsOpen : false})
  }


  componentDidMount(){
    const api = 'http://localhost:8080/api/v1/users/';
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
            // console.log("data.id "+response.data);
            this.setState({
              isloaded : true,
              ProfileData : response.data
            });
          })
  }

  // postingData(){
  //   axios.post("http://localhost:8080/api/v1/users/postData", "Testing the post request").then((res)=>{
  //     console.log(res)
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }



  render() {

    var{isloaded, ProfileData, modalIsOpen} = this.state;

            return(
              <div className="profile_details" key={ProfileData.id} UserID={ProfileData.id }>
              <div className="left_content">
                {/* <img className="p_img" src={item.image}></img> */}
                <div className="user_details">
                <p className="p_name">{ProfileData.firstName}</p><br/>
                {/* <p className="p_name">{ProfileData.lastName}</p><br/> */}
                <div className="mini_details">
                <span className="p_location">{ProfileData.icon} {ProfileData.address}</span>
                <span className="p_number">{ProfileData.phoneNumber}</span>
                <span className="p_email">{ProfileData.email}</span>
                </div>
                </div>
              </div>
              <div className="right_content">
                <button className="p_edit_btn" onClick={()=> this.openModal()}>Edit Profile</button>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={() => this.setState({modalIsOpen : false})} >
                  <div className="my_modal">
                    <h1>Edit Profile</h1>
                    <button className="close_btn" onClick={()=> this.closeModal()}>X</button>
                    <form className="my_form">
                      <input type="text" name="name" className="input_name" defaultValue={ProfileData.firstName}/><br /><br />
                      <input type="text" name="name" className="input_name" defaultValue={ProfileData.lastName}/><br /><br />
                      <input type="email" name="email" className="input_email" defaultValue={ProfileData.email} /><br /><br />
                      <input type="number" name="number" className="input_number" defaultValue={ProfileData.phoneNumber}  /><br /><br />
                      <input type="text" name="address" className="input_address" defaultValue={ProfileData.address}  />
                    </form><br /><br />
                    <button className="update_btn" onClick={()=>alert("Profile Updated")}>UPDATE</button><br /><br />
                  </div>
                </Modal>
                <div className="user_content_details">
                <span className="p_review">Reviews 12{ProfileData.Reviews}</span>
                <span>|</span>
                <span className="p_order">Orders 12{ProfileData.Orders}</span>
                </div>
              </div>
            </div>
            );
  }
}
export default Profile;

// {/* <div className="profile_details" key={ProfileData.id} UserID={ProfileData.id }>
// <div className="left_content">
//   {/* <img className="p_img" src={item.image}></img> */}
//   <div className="user_details">
//   <p className="p_name">{ProfileData.firstName}</p><br/>
//   {/* <p className="p_name">{ProfileData.lastName}</p><br/> */}
//   <div className="mini_details">
//   <span className="p_location">{ProfileData.icon} {ProfileData.address}</span>
//   <span className="p_number">{ProfileData.phoneNumber}</span>
//   <span className="p_email">{ProfileData.email}</span>
//   </div>
//   </div>
// </div>
// <div className="right_content">
//   <button className="p_edit_btn" onClick={()=> this.openModal()}>Edit Profile</button>
//   <Modal isOpen={this.state.modalIsOpen} onRequestClose={() => this.setState({modalIsOpen : false})} >
//     <div className="my_modal">
//       <h1>Edit Profile</h1>
//       <button className="close_btn" onClick={()=> this.closeModal()}>X</button>
//       <form className="my_form">
//         <input type="text" name="name" className="input_name" defaultValue={ProfileData.firstName}/><br /><br />
//         <input type="text" name="name" className="input_name" defaultValue={ProfileData.lastName}/><br /><br />
//         <input type="email" name="email" className="input_email" defaultValue={ProfileData.email} /><br /><br />
//         <input type="number" name="number" className="input_number" defaultValue={ProfileData.phoneNumber}  /><br /><br />
//         <input type="text" name="address" className="input_address" defaultValue={ProfileData.address}  />
//       </form><br /><br />
//       <button className="update_btn" onClick={()=>alert("Profile Updated", this.postingData())}>UPDATE</button><br /><br />
//     </div>
//   </Modal>
//   <div className="user_content_details">
//   <span className="p_review">Reviews 12{ProfileData.Reviews}</span>
//   <span>|</span>
//   <span className="p_order">Orders 12{ProfileData.Orders}</span>
//   </div>
// </div>
// </div> */}