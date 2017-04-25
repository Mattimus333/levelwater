import React from 'react';
import DemoButton from './demo-button';
import RightNavHome from './right-nav-home';
import { Link } from 'react-router-dom';

const NavbarHome = () => (
  <div id="navbar">
    <div className="ui grid">
      <div className="three wide column" id="demo-button"><DemoButton /></div>
      <div className="nine wide column" id="header">
        <Link to="/"><h1>levelwater.io</h1></Link>
      </div>
      <div className="four wide column" id="right-nav-home"><RightNavHome />
      </div>
    </div>
  </div>
);

export default NavbarHome;
