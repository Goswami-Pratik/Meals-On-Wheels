import React, {useState} from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import axios from "axios";
import { HiLocationMarker } from 'react-icons/hi';

const Homepage = () => {

   const[postcode, setPostcode] = useState('');

   const handleRegister = (e) => {
      e.preventDefault();

      const content = axios.post('http://localhost:8080/api/restaurantes/checkPostcode', {
            pickupPostCode: "",
            deliveryPostCode: postcode
        }).then(function (response) {

           if(response.status === 200) {
              if(response.data === true) {
                 localStorage.setItem("deliveryPostCode", JSON.stringify(postcode));
                 return window.location = "/found";
              } 
              else {
                 return window.location = "/notfound";
              } 
           } 

        }).catch(err => {
         console.log(JSON.stringify(err));
     })
  }
  
return(
<div className= "mainPage">
   <div className = "Surround">
      <div className = "headers">
         <h1>
            Hungry? <br/> Get Started
         </h1>
      </div>
      <form className="Searching" onSubmit={handleRegister}>
      <div className = "searchBar">
         <div className = "address">
            <HiLocationMarker className="location"/>
            <input className="input" type="text" placeholder= "Enter Delivery Postcode" required minLength="6" maxLength ="8"
               onChange={e => setPostcode(e.target.value)}
            />
         </div>
         <div className = "find">
            <button class="Findfood-button">Find Food</button>
         </div>

      </div>
      </form>
      <h3 className = "signIn">Sign in to see your past orders </h3>
   </div>
</div>
)
}
export default Homepage;
