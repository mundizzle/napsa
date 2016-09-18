import React, { Component } from 'react'

class Map extends Component {
  render () {
    const { states, onClick } = this.props
    return (
      <div className='usa-viewport'>
        <svg className='usa'>
          <g>
            {
              states.map(function (state, key) {
                return <path key={key} onClick={onClick} {...state} />
              })
            }
          </g>
        </svg>
      </div>
    )
  }
}

export default Map
