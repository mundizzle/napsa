import React, { Component, PropTypes } from 'react'

import Header from './header'
import Nav from './nav'
import Footer from './footer'

import './index.css'

class App extends Component {
  constructor (props) {
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
  render () {
    const { isNavOpen } = this.state
    return (
      <div className='p4-app-shell'>
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

App.propTypes = {
  children: PropTypes.node
}

export default App
