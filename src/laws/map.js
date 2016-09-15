import React, { Component } from 'react'

class Map extends Component {
  render () {
    const { states, onClick } = this.props
    return (
      <svg id='usa'>
        <g>
          {
            states.map(function (state, key) {
              return <path key={key} onClick={onClick} {...state} />
            })
          }
        </g>
      </svg>
    )
  }
}

export default Map
