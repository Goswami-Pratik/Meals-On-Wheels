import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'

function About() {
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
                  What is Meals on Wheels?
              </h2>
              <p className = "text">
              Meals On Wheels is a non profit organisation aimed at 
              connecting neighbours with each other and local businesses 
              so surplus food can be shared, not thrown away. This could be 
              food nearing its sell-by date in local stores, spare home-grown vegetables, 
              bread from your baker, or the groceries in your fridge when you go away. 
              We exist first and foremost to reduce the environmental, social and economic impact 
              of food waste by redistributing surplus food to our network of Charity and Community Group partners.
              We believe that small actions can lead to big changes. Collectively we can build a more sustainable
              future where our most precious resources are shared, not thrown away. Join today!
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

export default About
