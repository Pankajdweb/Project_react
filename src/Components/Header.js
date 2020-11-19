import React, {Component, component} from 'react';
import { Link } from 'react-router-dom';




export class Header extends React.Component {
    render() {
      return (
    <div>

        <ul>
            <li>
                <Link to='/'>
                    home
                </Link>
                </li>
                <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
      );
    }
   }