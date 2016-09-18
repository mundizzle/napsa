import React, { Component } from 'react'
import { $blue, $green, $yellow, $orange } from '../../app/variables'
import states from './states'

import Map from './map'
import App from '../../app'
import './index.css'

class Laws extends Component {
  constructor (props) {
    super(props)
    this.clickState = this.clickState.bind(this)
  }
  getStateById (id) {
    return states.find(function (state) {
      return state.id === id
    })
  }
  clickState (e) {
    window.location = `#/laws/${this.getStateById(e.target.id).id}`
  }
  render () {
    return (
      <App>
        <h2 className='h2'>What's Happening In Your State?</h2>
        <div style={{padding: '0 1em'}}>
          <h3>U.S. State Laws on the Private Ownership of Primates:</h3>
          <h4>Primate Incidents 1990 - 2015</h4>
          <Map onClick={this.clickState} states={states} />
          <div>
            <dl>
              <dt style={{backgroundColor: $orange}}>&nbsp;</dt>
              <dd>No Laws</dd>
              <dt style={{backgroundColor: $yellow}}>&nbsp;</dt>
              <dd>Requires License or Permit to Own</dd>
              <dt style={{backgroundColor: $blue}}>&nbsp;</dt>
              <dd>Partial Ban <small>(ban on certain species of primates)</small></dd>
              <dt style={{backgroundColor: $green}}>&nbsp;</dt>
              <dd>Ban on all Primate Species</dd>
            </dl>
          </div>
          <br />
          <br />
        </div>
      </App>
    )
  }
}

export default Laws
