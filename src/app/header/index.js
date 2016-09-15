import React, { Component } from 'react'

import './index.css'
import monkey from './images/monkey.png'

class Header extends Component {
  render () {
    const { toggleNav, isNavOpen } = this.props
    return (
      <header className='header'>
        <button onClick={toggleNav}>
          {isNavOpen ? `x` : `☰`}
        </button>
        <h1>Progress4Primates</h1>
        <img className='monkey' src={monkey} />
      </header>
    )
  }
}

export default Header
