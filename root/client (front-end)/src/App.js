import React from 'react'
import './styles/App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/pages/Aboutpages/About'
import Goal from './components/pages/Aboutpages/Goal'
import Services_Offered from './components/pages/Aboutpages/Services_Offered'
import What_Can_You_Do from './components/pages/Aboutpages/What_Can_You_Do'
import Home from './components/pages/Home'
import Problem from './components/pages/Foodwaste/Problem'
// import Facts from './components/pages/Foodwaste/Facts'
import Contribute from './components/pages/Foodwaste/Contribute'
import Donate from './components/pages/Donate'
import Contact from './components/pages/contact-us/contact.js'
import Help from './components/pages/help.js'

import './components/style.css';
import Login from './components/pages/Login/login.js';
import Signup from './components/pages/Signup/signup.js';
import Browse from './components/pages/browse.js';
import UpdateFood from './components/pages/updateFood.js';
import addFood from './components/pages/addFood.js';
import addCart from './components/pages/addtoCart.js';
import userCart from './components/pages/userCart.js';
import delivery from './components/pages/delivery.js';
import contact from './styles/pages/contact.css'

import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Main from './components/pages/Profilepages/Main';
import TermsConditions from './components/pages/TermsConditions';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import FAQ from './components/pages/FAQ';


import notFound from './components/pages/Findfood/notFound';
import found from './components/pages/Findfood/found';
import Review from './components/pages/Review/Review'

function App() {
  return (
      <Router>
        <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/About' exact component = {About}/>
        <Route path='/Goal' exact component = {Goal}/>
        <Route path='/Services_Offered' exact component = {Services_Offered}/>
        <Route path= '/What_Can_You_Do' exact component = {What_Can_You_Do} />
        <Route path= '/Problem' exact component = {Problem} />
        {/* <Route path= '/Facts' exact component = {Facts} /> */}
        <Route path= '/Contribute' exact component = {Contribute} />
        <Route path= '/Donate' exact component = {Donate} />
        <Route path= '/Profile/Orders' exact component = {Main} />
        <Route path= '/T&C' exact component = {TermsConditions} />
        <Route path= '/Ppolicy' exact component = {PrivacyPolicy} />
        <Route path= '/FAQ' exact component = {FAQ} />
		<Route path = "/browse" exact component ={Browse} />
		<Route path = "/add_food" exact component ={addFood} />
		<Route path = "/update-food/:id" exact component ={UpdateFood} />
		<Route path= '/signup' exact component = {Signup} />
		<Route path= '/login' exact component = {Login} />
		<Route path= '/cart-food/:id' exact component = {addCart} />
		<Route path= '/userCart' exact component = {userCart} />
    <Route path= '/delivery' exact component = {delivery} />
		<Route path= '/Help' exact component = {Help} />
		<Route path= '/notFound' exact component = {notFound} />
    <Route path= '/found' exact component = {found} />
    <Route path= '/Review' exact component = {Review}/>
    <Route path= '/Contact' exact component = {Contact}/>

        
      </Switch>
      </Router>
    
      
    
  );
}

export default App;
