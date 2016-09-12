import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.css';

class Home extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/share">Share Your Support</Link></li>
        <li><Link to="/species">Primate Species: Pet vs. Wild</Link></li>
        <li><Link to="/laws">What's Happening In Your State?</Link></li>
        <li><Link to="/help">How to Help</Link></li>
      </ul>
    );
  }
}

export default Home;
