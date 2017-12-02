import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

const Navbar = () =>
  <nav className="navigation">
    <div className="logo">
      <img></img>
    </div>
    
    <div className="navigation-bar">
      <ul className="navigation-links">
        <li className="navigation-link">
          <a href="/">Fiefdom</a>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
