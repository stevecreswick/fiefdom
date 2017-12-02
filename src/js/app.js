import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board';
import Navbar from './Navbar';

import '../css/application.scss'; // Import CSS -> ADDED IN THIS STEP

import hanSolo from '../assets/hansolo.png';

export default class Hello extends Component {
  render() {
    return (
      <div className="page-container">
        <Navbar></Navbar>

        Han Solo
        Boba

        <img src={ hanSolo } alt='Han Solo' />

        <Board></Board>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
