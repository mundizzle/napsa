import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import monkey from '../images/monkey.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { toggleNav } = this.props
    return (
      <header className="p4p-header">
        <svg className="p4p-toggle-menu" onClick={toggleNav}>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <h1 style={{flex: 1}}>Progress4Primates</h1>
        <div>
          <img className="p4p-monkey" src={monkey} />
        </div>
      </header>
    )
  }
}

Header.propTypes = {

}

export default Header
