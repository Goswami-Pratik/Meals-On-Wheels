import React from 'react';
import Sidebar from './Sidebar';
import './Style/big.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Favourites from './pages/Favourites';
import Addresses from './pages/Addresses';
import Profile from './pages/Profile';
import Payments from './pages/Payments';

function Main() {
  return (
    <div className="main_container">
    <Profile />
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/Profile/Orders' exact component={Orders} />
          <Route path='/Profile/Favourites' exact component={Favourites} />
          <Route path='/Profile/Addresses' exact component={Addresses} />
          <Route path='/Profile/Payments' exact component={Payments} />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
