import React, { Component } from 'react'
import { Link } from 'react-router'

class State extends Component {
  render () {
    const id = this.props.params.state
    return (
      <div>
        <div>
          <Link to='/laws'>Back</Link>
        </div>
        <img src={`static/images/states/${id.toLowerCase()}.png`} />
      </div>
    )
  }
}

export default State
