import React, { Component } from 'react'
import './index.css'

import sample1 from './images/sample1.png'
import sample2 from './images/sample2.png'

import App from '../app'

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
          <img className='share' src={sample1} />
          <br />
          <br />
          <img className='share' src={sample2} />
        </div>
      </App>
    )
  }
}

export default Share
