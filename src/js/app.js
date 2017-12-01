import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.scss'; // Import CSS -> ADDED IN THIS STEP

import hanSolo from '../assets/hansolo.png';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Han Solo
        Boba Fett

        <img src={ hanSolo } alt='Han Solo' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
