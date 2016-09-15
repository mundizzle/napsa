import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { isNavOpen, toggleNav } = this.props
    let className = `p4-nav`
    if (isNavOpen) className += ` p4-nav-open`
    return (
      <nav className={className}>
        <div style={{margin: '1em', height: '30px'}}>
          <svg onClick={toggleNav}>
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
          </svg>
        </div>
        <ul className='nav-ul reset-ul'>
          <li className='reset-li'><Link to='/'>Home</Link></li>
          <li className='reset-li'><Link to='/species'>Primate Species: Pet vs. Wild</Link></li>
          <li className='reset-li'><Link to='/laws'>What's Happening In Your State?</Link></li>
          <li className='reset-li'><Link to='/share'>Share Your Support</Link></li>
          <li className='reset-li'><Link to='/help'>How to Help</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
