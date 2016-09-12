import React, { Component, PropTypes } from 'react'

import Header from './header'
import Nav from './nav'
import Footer from './footer'

class AppShell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }
  toggleNav () {
    console.log(this.state.isNavOpen)
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  render() {
    const { isNavOpen } = this.state
    return (
      <div className="p4p-app-shell">
        <Header toggleNav={this.toggleNav} />
        <Nav isNavOpen={isNavOpen} toggleNav={this.toggleNav} />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

AppShell.propTypes = {
  children: PropTypes.node
}

export default AppShell
