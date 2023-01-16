import React from 'react';
import LogoIcon from './../../shared/images/ozon-logo.png'
import styles from "./style.module.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from "../../../pages/HomePage/index";

const Logo = () => {
  return (
    <Router>
    <Switch>  
    <Route component={HomePage} exact path='/'>
     <a href="/" className={styles.logo}>
      <img src={LogoIcon} alt="Ozon Logo" className="logo-icon" />
    </a> 
     </Route>
    </Switch>
    </Router>
  );
};

export default Logo;