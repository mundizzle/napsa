import React, { Component } from 'react'

import './index.css'
import monkey from './images/monkey.png'

class Header extends Component {
  render () {
    const { toggleNav, isNavOpen } = this.props
    return (
      <header className='header'>
        <div>
          <button onClick={toggleNav}>
            {isNavOpen ? `x` : `☰`}
          </button>
        </div>
        <div style={{flex: 1}}>
          <h1>Progress4Primates</h1>
        </div>
        <div>
          <img className='monkey' src={monkey} />
        </div>
      </header>
    )
  }
}

export default Header
