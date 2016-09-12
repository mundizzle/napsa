import React, { Component } from 'react';
import './index.css';
import chimpanzees from './images/chimpanzees.jpg'
import capuchin from './images/capuchin.jpg'
import macaque from './images/macaque.jpg'
import marmoset from './images/marmoset.jpg'

class Species extends Component {
  render() {
    return (
      <div>
        <h1>Primate Species: Pet vs Wild</h1>
        <ul className="reset-ul">
          <li className="reset-li"><img className="species-link-image" src={chimpanzees} /></li>
          <li className="reset-li"><img className="species-link-image" src={capuchin} /></li>
          <li className="reset-li"><img className="species-link-image" src={macaque} /></li>
          <li className="reset-li"><img className="species-link-image" src={marmoset} /></li>
        </ul>
      </div>
    );
  }
}

export default Species;
