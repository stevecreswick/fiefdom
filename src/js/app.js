import React, { Component } from 'react';
import { render } from 'react-dom';
import Fief from './components/gameboard/Fief';
import Navbar from './components/Navbar';

import '../css/application.scss'; // Import CSS -> ADDED IN THIS STEP

import hanSolo from '../assets/hansolo.png';

export default class Fiefdom extends Component {
  render() {
    return (
      <div className="page-container">
        <Navbar></Navbar>
        <Fief></Fief>
      </div>
    );
  }
}

render(<Fiefdom />, document.getElementById('app'));
