import React, {Component} from 'react';
import { Link } from 'react-router-dom';




export class Header extends React.Component {
    render() {
      return (
    <div>
<div className="header">
        <ul>
            <li>
                <Link to='/home'>
                    home
                </Link>
                </li>
                <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
    </div>
      );
    }
   }