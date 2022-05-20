import React from 'react'
import Footer from "../../Footer"
import '../Findfood/notFound.css'
import img from '../../../img/notFound.jpg'


function notFound() {
    return(
<div>

<img className="bg-findfood" src={img}></img>

    <div className = "bg-text"> 
        <h1 className ="unavailable" >Sorry we are currently unavailable in your area</h1>
    </div>   
    

    
        
     <Footer/>
    
</div>


    )

}


export default notFound;
