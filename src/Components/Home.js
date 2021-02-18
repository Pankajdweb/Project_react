import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class Home extends React.Component {
    render() {
      return (
    <div>
          <ul>
            <li>
                <Link to='/home'>
                    home
                </Link>
                </li>
</ul>


    </div>
      );
    }
   }