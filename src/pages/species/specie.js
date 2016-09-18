import React, { Component } from 'react'
import { Link } from 'react-router'

class Specie extends Component {
  render () {
    const id = this.props.params.specie
    let img
    if (id === 'chimpanzee') img = <img src='static/images/species/chimpanzees_detail.png' />
    if (id === 'capuchin') img = <img src='static/images/species/capuchin_detail.png' />
    if (id === 'macaque') img = <img src='static/images/species/macaque_detail.png' />
    return (
      <div>
        <div>
          <Link to='/species' className='back-link'>Back</Link>
        </div>
        {img}
      </div>
    )
  }
}

export default Specie
