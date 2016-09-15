import React, { Component } from 'react'
import { Link } from 'react-router'
import states from './states'

class State extends Component {
  render () {
    const id = this.props.params.state
    const state = states.find(function (state) { return id === state.id })
    return (
      <div>
        <div>
          <Link to='/laws'>Back</Link>
        </div>
        <img src={state.src} />
      </div>
    )
  }
}

export default State
