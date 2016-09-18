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
                const { id, d, className } = state
                return <path
                  key={key}
                  onClick={onClick}
                  d={d}
                  className={className}
                  data-id={id}
                />
              })
            }
            {
              states.map(function (state, key) {
                const { id, x, y, incidents } = state
                return <text
                  key={`text${key}`}
                  x={x}
                  y={y}
                  data-id={id}
                  onClick={onClick}
                >
                  {`${id} (${incidents})`}
                </text>
              })
            }
          </g>
        </svg>
      </div>
    )
  }
}

export default Map
