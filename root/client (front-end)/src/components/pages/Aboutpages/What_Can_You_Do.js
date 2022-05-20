import React from 'react'
import { Link } from 'react-router-dom'
import packing from '../../../img/packing.jpg'
import Footer from '../../Footer'


function What_Can_You_Do() {
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
              What Can You Do To Help?
          </h2>
          <p className = "text">
          You could help raise awareness and funds to help us create a more just, 
          more compassionate future. We're here to inspire you and support you every
          step of the way.

          Help to support our shops by donating good quality food and ingredients.

          From a one-off gift to a regular donation, your support can help us to tackle 
          the structural issues that lock people into poverty.

          We are grateful to work with a number of organisations who play a vital role in supporting 
          our work to help people in crisis, and end the need for food banks in the UK.

          All of the food in our food banks is donated by people in their local communities. 
          Could you host a collection at your church, school or business?
          You can host an event and we will collect any times collected.
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

export default What_Can_You_Do
