import React, { Component } from 'react'

import './index.css'

class Header extends Component {
  render () {
    const { toggleNav, isNavOpen } = this.props
    return (
      <header className='header'>
        <div className='toggle' onClick={toggleNav}>
          {isNavOpen ? `x` : `☰`}
        </div>
        <h1>Progress4Primates</h1>
        <img className='monkey' src='static/images/monkey.png' />
      </header>
    )
  }
}

export default Header
