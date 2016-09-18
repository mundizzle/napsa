import React, { Component } from 'react'
import './index.css'

import App from '../../app'

class Share extends Component {
  render () {
    return (
      <App>
        <h2 className='h2'>Share Your Support</h2>
        <div style={{padding: '1em'}}>
          <p>
            Create your own
            <input type='file' />
          </p>
          <img className='share' src='static/images/share/sample1.png' />
          <br />
          <br />
          <img className='share' src='static/images/share/sample2.png' />
        </div>
      </App>
    )
  }
}

export default Share
