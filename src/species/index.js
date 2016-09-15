import React, { Component } from 'react'
import './index.css'
import chimpanzees from './images/chimpanzees.jpg'
import capuchin from './images/capuchin.jpg'
import macaque from './images/macaque.jpg'
import marmoset from './images/marmoset.jpg'

import App from '../app'

class Species extends Component {
  render () {
    return (
      <App>
        <h2>Primate Species: Pet vs Wild</h2>
        <div className='p4-content'>
          <ul className='p4-content-species reset-ul'>
            <li className='reset-li'>
              <img className='species-link-image' src={chimpanzees} />
              <div>
                Chimpanzee
                <small>Natsu (resuced to Center for Great Apes)</small>
              </div>
            </li>
            <li className='reset-li'>
              <img className='species-link-image' src={capuchin} />
              <div>
                White-throated Capuchin
                <small>Bailey (resuced to Jungle Friends)</small>
              </div>
            </li>
            <li className='reset-li'>
              <img className='species-link-image' src={macaque} />
              <div>
                Long-tailed Macaque
                <small>Breanna (rescued to Primate Rescue Center)</small>
              </div>
            </li>
            <li className='reset-li'>
              <img className='species-link-image' src={marmoset} />
              <div>
                Common marmoset
                <small>BoBo (rescued to Jungle Friends)</small>
              </div>
            </li>
          </ul>
        </div>
      </App>
    )
  }
}

export default Species
