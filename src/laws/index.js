import React, { Component } from 'react';
import { $blue, $green, $yellow, $orange } from '../constants'
import states from './states'
import Map from './map'
import './index.css';

import AppShell from '../components/app_shell'

class Laws extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state: null,
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
    this.setState({
      state: state
    })
  }
  render() {
    const { state } = this.state
    let img
    if (state) {
      img = <img className="p4p-state" src={state.src} />
    }
    return (
      <AppShell>
        {img}
        <h2>What's Happening In Your State?</h2>
        <div className="p4p-content">
          <h3>U.S. State Laws on the Private Ownership of Primates: Primate Incidents 1990 - 2015</h3>
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
      </AppShell>
    );
  }
}

export default Laws
