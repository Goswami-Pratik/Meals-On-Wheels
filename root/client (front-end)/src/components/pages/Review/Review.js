import React, {useState} from 'react'
import Footer from "../../Footer"
import axios from 'axios'
import "../Review/ReviewForm.css"
import "../Review/ReviewGet.css"

class Review extends React.Component {  

state = {
    name:'',
    description:'',
    Reviews:[]
}
handleChange1 = event =>{
    this.setState({name: event.target.value});
    

}
handleChange2 = event =>{
    this.setState({description: event.target.value});
}
reviewregister = event =>{

    event.preventDefault();

    axios.post('http://localhost:3000/api/review/newReview', {
            name:this.state.name,
            description:this.state.description
        })
        // Attenpt on reseting the form... did not work
        //.then(function (response) {
            //if(response.data === 200) {
              //  $("reseting")[0].reset();
               // return false;
            //}    
       // })
        .catch(err => {
            console.log(JSON.stringify(err));
        })     
}

componentDidMount(){
    axios.get('http://localhost:3000/api/review/getReview')
        .then(res => {
            const Reviews = res.data;
            this.setState({ Reviews });
        })


}
    render(){
        return(
        <div>
            
            <div className = "background">
                <form className = "form-shape" id = "reseting" onSubmit={this.reviewregister}>
                    <div className = "form-contents">
                        <h3 className = "form-text">Name</h3>
                        <input className = "form-input" type="text" required onChange={this.handleChange1}/>
                        <h3 className = "form-text" >Review</h3>
                        <textarea className = "form-input-big" placeholder = "200" type="text" onChange={this.handleChange2} />
                        <div className = "form-button">
                            <button >Post</button>
                        </div>
                    </div>
                </form>

                <div className = "getReview-Location">
                {this.state.Reviews.map(
                            review  =>
                      <div className = "getReview-Container">
                          <div className = "getReview-content">
                          
                          <div className = "getReview-name"><h3>Name: {review.name}</h3></div>  
                          <h3 className = "getReview-titleD">Review:</h3>
                          <div className = "getReview-description"><p>{review.description}</p></div>
                          </div>

                      </div>  
                )}
                </div>


            </div>
        <Footer/>
        </div>
)}
        
}
export default Review