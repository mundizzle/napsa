import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.css'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { isNavOpen } = this.props
    let className = `nav`
    if (isNavOpen) className += ` nav-open`
    return (
      <nav className={className}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/species'>Primate Species: Pet vs. Wild</Link></li>
          <li><Link to='/laws'>What's Happening In Your State?</Link></li>
          <li><Link to='/share'>Share Your Support</Link></li>
          <li><Link to='/help'>How to Help</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
