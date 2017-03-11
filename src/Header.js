import React, {Component} from "react";
import {IndexLink} from "react-router";
//import NavLink from "./modules/NavLink";
import "./App.css";
import {Navbar, NavItem, Nav} from "react-bootstrap";

import { Link } from 'react-router';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="show-grid">
        <Navbar  >
          <Nav className="pdsa-sn-wrapper">
            <NavItem><IndexLink to="/">TCI</IndexLink></NavItem>
            <NavItem><Link to="/Rationale">Rationale</Link></NavItem>
            <NavItem><Link to="/Situational_Awareness">Situational Awareness</Link></NavItem>
            <NavItem><Link to="/TCI">TCI</Link></NavItem>
            <NavItem><Link to="/Assessment">Assessment</Link></NavItem>
            <NavItem><Link to="/about">About</Link></NavItem>

          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
