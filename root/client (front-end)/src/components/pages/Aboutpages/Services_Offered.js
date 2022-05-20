import React from 'react'
import { Link } from 'react-router-dom'
import packing from '../../../img/packing.jpg'
import Footer from '../../Footer'

const Services_Offered = () => {
    return (
        <div className ="About">
        <div className = "block">
            <ul className ="list">
                   <Link to ="/About" className="about_link1 link" >
                    What is Meals On Wheels?
                   </Link>
          <Link to ="/Goal" className="about_link2 link" >
          What is our goal?
          </Link>
          <Link to ="/Services_Offered" className="about_link3 link " >
          What services do we offer?
          </Link>
          <Link to ="/What_Can_You_Do" className="about_link4 link" >
          What Can You Do To Help?
          </Link>
          </ul>
          <div className = "About_text">
          <h2 className = "title">
              Services Offered
          </h2>
          <p className = "text">
          A store has perfectly good food that they cannot sell, in seconds, 
          they upload a description of the food using our webapp.
          We receive a notification letting us know the food is available for collection. 
          We send one of our delivery drones to collect it.
          It’s a win-win! Our organisation and charities have access to a supply of fresh food and 
          businesses can contribute to their community in a meaningful way.
          Any individual can also contribute to sending us unused food or ingredients.

          We work with local charities and work in community and inhouse kitchens to provide food
          that is displayed on our web app for users to pick from.
          Once picked, it is delivered straight to your doorstep safe and sound. No hassle, no risk.

          </p>
          <div className = "support">
          
          <Link to ="/Help" className="help_us">
                    Help Us
                </Link>
                </div>
          </div>
          <Footer/>
        </div>

    </div>
    )
}

export default Services_Offered
