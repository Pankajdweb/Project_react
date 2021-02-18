import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {Header} from './Header';
import {Home} from './Home'
import {About} from './About'

export default function main() {
  return (
      <Router>
  <Header/>
  <div className="mainContainer">
    <div className="sideBar">
    <ul>
            <li>
                <Link to='/home'>
                    Home
                </Link>
                </li>
                <li>
                <Link to="/about">About</Link>
            </li>
        </ul>

    </div>
    <div className="contentMain">

   
  <Switch>
      <Route path="/about">
            <About />
      </Route>
      <Route path="/">
          <Home />
      </Route>
    </Switch>
    </div>
  </div>

 {/* <Footer/>  */}
    </Router> 
  );
}
