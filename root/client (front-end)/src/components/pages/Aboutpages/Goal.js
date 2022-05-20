import React from 'react'
import { Link } from 'react-router-dom'
import packing from '../../../img/packing.jpg'
import Footer from '../../Footer'

const Goal = () => {
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
              <Link to ="/What_Can_You_Do?" className="about_link4 link" >
              What Can You Do To Help?
              </Link>
              </ul>
              <div className = "About_text">
              <h2 className = "title">
                  What is our goal?
              </h2>
              <p className = "text">
              Our vision is for millions of hyper local food sharing networks 
              all around the world. We believe Meals on Wheels can help create a world in 
              which nothing of value goes to waste, and every single person has 
              enough to eat – without destroying our planet in the process.

              Our goal is for our partner charities, from homeless hostels to family 
              support services, benefit through making savings on their food costs. This 
              allows them to relocate their funding towards their core service and support
              their underlying mission.

              It’s a win-win! Charities have access to a supply of fresh food and business 
              can contribute to their community in a meaningful and practical way by ensuring
               that no good food goes to waste.
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

export default Goal
