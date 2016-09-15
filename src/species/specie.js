import React, { Component } from 'react'
import { Link } from 'react-router'

import chimpanzeeDetail from './images/chimpanzees_detail.png'
import capuchinDetail from './images/capuchin_detail.png'
import macaqueDetail from './images/macaque_detail.png'

class Specie extends Component {
  render () {
    const id = this.props.params.specie
    let img
    if (id === 'chimpanzee') img = <img src={chimpanzeeDetail} />
    if (id === 'capuchin') img = <img src={capuchinDetail} />
    if (id === 'macaque') img = <img src={macaqueDetail} />
    return (
      <div>
        <div>
          <Link to='/species'>Back</Link>
        </div>
        {img}
      </div>
    )
  }
}

export default Specie
