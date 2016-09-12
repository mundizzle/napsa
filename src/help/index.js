import React, { Component } from 'react';
import './index.css';

import AppShell from '../components/app_shell'

class Help extends Component {
  render() {
    return (
      <AppShell>
        <h2>How to Help</h2>
        <div className="p4p-content">
          <ul>
            <li>Article of issue - celebrity with primate, company using primate for ad, entertainment business using primate, etc.</li>
            <li>Already written letter to celebrity or business</li>
            <li>User can sign letter and send / email to company / person</li>
            <li>Link to company or celebrity Facebook - user can also attach post there</li>
          </ul>
        </div>
      </AppShell>
    )
  }
}

export default Help;
