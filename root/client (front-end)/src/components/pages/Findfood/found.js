import React from 'react'
import foundService from '../Findfood/foundService'
import img from '../Findfood/CardPic.jpg'
import '../Findfood/found-card.css'
import '../Findfood/found-appearance.css'
import Footer from "../../Footer"
import img1 from '../../../img/notFound.jpg'
import axios from 'axios'

class found extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            restaurantes:[]
        }      
             
    }

    componentDidMount(){
        const deliveryPostCode = JSON.parse(localStorage.getItem('deliveryPostCode'));;
        console.log(deliveryPostCode);
        if(deliveryPostCode !== undefined) {
            const content = axios.post('http://localhost:8080/api/restaurantes/getValidRestaurant', {
                pickupPostCode: "",
                deliveryPostCode: deliveryPostCode
            }).then((response) => {
                console.log(response.data)
                this.setState({restaurantes: response.data})
            }).catch(err => {
                console.log(JSON.stringify(err));
            });
        }
         
    }

    render(){
        return(
            <div>       
                <div className = "found-bg">
 
                    <div className = "found-title">
                        <h1>Restaurantes Found in your Area</h1>
                        
                    </div>
                   <div className = "Card-location">
                        {this.state.restaurantes.map(
                            restaurant  =>
                            <div className = "Card-container">

                                <div className = "Card-image"><img src={img}></img> </div>

                                <div className = "Card-content">
                                    <div className = "Card-title"><h3>{restaurant.name}</h3></div>
                                    <div className = "Card-body"><p>{restaurant.description}</p></div>
                                </div>
                                
                                <div className = "Card-button">  
                                    <button> 
                                        <a>View more</a>
                                    </button>
                                </div>

                            </div>
                          
                            
                        )}
                        
                    </div>
                   
                    
                </div> 
                    <Footer/>
            </div>
            
        )

    }

}

export default found