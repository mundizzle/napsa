import React, { Component } from 'react';
import { $blue, $green, $yellow, $orange } from '../constants'
import states from './states'
import Map from './map'
import './index.css';

class Laws extends Component {
  constructor (props) {
    super(props)
    this.state = {
      states: states
    }
    this.clickState = this.clickState.bind(this)
  }
  getStateById (id) {
    return states.filter(function(state){
      return state.id === id
    })[0]
  }
  clickState (e) {
    const state = this.getStateById(e.target.id)
    console.log(state)
  }
  render() {
    return (
      <div>
        <h1>What's Happening In Your State?</h1>
        <h2>U.S. State Laws on the Private Ownership of Primates: Primate Incidents 1990 - 2015</h2>
        <Map onClick={this.clickState} states={this.state.states} />
        <dl>
          <dt style={{backgroundColor: $blue}}></dt>
          <dd>No Laws</dd>
          <dt style={{backgroundColor: $yellow}}></dt>
          <dd>Requires License or Permit to Own</dd>
          <dt style={{backgroundColor: $orange}}></dt>
          <dd>Partial Ban <small>(ban on certain species of primates)</small></dd>
          <dt style={{backgroundColor: $green}}></dt>
          <dd>Ban on all Primate Species</dd>
        </dl>
      </div>
    );
  }
}

export default Laws