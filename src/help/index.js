import React, { Component } from 'react'
import './index.css'

import App from '../app'

class Help extends Component {
  render () {
    return (
      <App>
        <h2 className='h2'>How to Help</h2>
        <div style={{padding: '1em'}}>
          <ul>
            <li>Article of issue - celebrity with primate, company using primate for ad, entertainment business using primate, etc.</li>
            <li>Already written letter to celebrity or business</li>
            <li>User can sign letter and send / email to company / person</li>
            <li>Link to company or celebrity Facebook - user can also attach post there</li>
          </ul>
        </div>
      </App>
    )
  }
}

export default Help
