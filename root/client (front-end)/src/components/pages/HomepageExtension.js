import React from 'react'

import CardSection from '../CardSection'
import delivery from '../../img/delivery.svg'
import salt from '../../img/salt.svg'
import serving from '../../img/serving.svg'
import helpimg from '../../img/helpimg.jpg'
import Footer from '../Footer'


const HomepageExtension = () => {
    return (
        
        <div className = "extend">
              <img className = "helpimg" src= {helpimg}/>
            <div className="background">
            <h2 className = "local">
            Our Services
            </h2>
        
            <div className = "imgs">
                <div className = "servingNtext">
            <img className = "serving" src= {serving} />
            <p className = "servingText">
Choose from a wide variety of food straight from food banks or donated by restaurants
            </p>
            </div>
            <div className ="saltNtext">
            <img className = "salt" src= {salt} />
            <p className = "saltText">
Donate unused ingredients that others can use in home cooking or donate them straight to food banks
            </p>
            </div>
            <div className="deliveryNtext">
            <img className = "delivery" src= {delivery} />
            <p className = "deliveryText">
                Delivered straight to your doorstep safe and sound. No hassle, no risk
            </p>
            </div>
            </div>
            
            
            <div className = "work">
            <h2 className = "wrk">
                Work With Us
            </h2>
            
            </div>
            <CardSection/>
            </div>
          <Footer/>
        </div>
    
    )
}

export default HomepageExtension;

