import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Home from './pages/Home';
import './App.css';
import UserLogged from './pages/UserLogged';

class App extends Component {
  state = {
    img:
      'https://upload.wikimedia.org/wikipedia/commons/6/63/GlobalSocial_850.jpg'
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <img src={this.state.img} alt="foto" />
          </div>

          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Ative"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item PageSwitcher__Item--Active"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>
              or
              <NavLink
                exact
                to="/sign-up"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/sign-up" component={SignUpForm}></Route>

            <Route path="/sign-in" component={SignInForm}></Route>

            <Route path="/home" component={Home}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
