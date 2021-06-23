import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>FullStack.app</h1>
          <ul className="header">
            <li><NavLink exact to="/">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            {/* <li><NavLink to="/profile">Profile</NavLink></li> */}
          </ul>
          <div className="content">
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;