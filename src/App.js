
import './App.scss';

import {Header}  from './Components/Header';
import {Home}  from './Components/Home';
import {About}  from './Components/About';
import {Footer}  from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
  <Header/>
  <div className="mainContainer">
    <div className="sideBar">
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

<Footer/>
    </Router>
  );
}

export default App;
