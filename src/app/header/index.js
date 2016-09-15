import React, { Component } from 'react'

import monkey from './images/monkey.png'

class Header extends Component {
  render () {
    const { toggleNav } = this.props
    return (
      <header className='p4-header'>
        <svg className='p4-toggle-menu' onClick={toggleNav}>
          <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
        </svg>
        <h1 style={{flex: 1}}>Progress4Primates</h1>
        <div>
          <img className='p4-monkey' src={monkey} />
        </div>
      </header>
    )
  }
}

export default Header
