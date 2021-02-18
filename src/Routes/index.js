import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginLayout from '../Login/login.js';
import MainLayout from '../Components/Main.js';


export default function Routes() {
  return (
    <Router>
     
        <Switch>
          <Route path="/" exact>
            
              <LoginLayout />
          </Route>
          <Route path="/home" exact>
          <MainLayout />
          </Route>
      
        </Switch>
    </Router>
  );
}
