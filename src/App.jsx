import React from 'react'
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from "./kit/components/header";
import common from './kit/shared/styles/common.module.css'

function App() {
  return (
 <Router>
    <div className={common['page-wrap']}>
      {/* for width */}
      <div className={common['top-section']}>
          <Header/>
          <Switch>  
            <Route exact path='/'>
          {HomePage}
          </Route>
            <Route component={AboutUsPage} exact path='/about-us'/>
          </Switch>

      </div>
    </div>
    </Router> 
  );
}

export default App;
    //   <Router>
     
    //   <Link to='/aboutUsPage'>About Us</Link> 


    //   <Switch>
      
    //     <Route path='/about-us'>
    //       {AboutUsPage}     
    //        </Route>
    //   </Switch>
    // </Router>