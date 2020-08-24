import React from "react";
import SquadBuilder from "../pages/SquadBuilder";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "../pages/Profile";
import Formation from "../pages/Formation";

const Navbar = () => {
  return (
    <Router>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Vissaja Liha App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                      <LoginButton />
                  </li>
                  <li class="nav-item">
                      <LogoutButton />
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><Link to="/profile" className="link">Profile</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><Link to="/squadbuilder" className="link">Squad Builder</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><Link to="/formation" className="link">Formation</Link></a>
                  </li>
                </ul>
            </div>
        </nav>
        <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/squadbuilder">
              <SquadBuilder />
            </Route>
            <Route path="/formation">
              <Formation />
            </Route>
        </Switch>
    </Router>
  );
};

export default Navbar;