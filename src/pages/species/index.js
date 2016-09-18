import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.css'

import App from '../../app'

class Species extends Component {
  render () {
    return (
      <App>
        <h2 className='h2'>Primate Species: Pet vs Wild</h2>

        <Link to='/species/chimpanzee'>
          <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div className='tc'>
              <img src='static/images/species/chimpanzees.jpg' className='br-100 h4 w4 dib ba b--black-05 pa2' title='Kitty staring at you' />
              <h1 className='f3 mb2'>Chimpanzee</h1>
              <h2 className='f5 fw4 gray mt0'>Natsu (resuced to Center for Great Apes)</h2>
            </div>
          </article>
        </Link>

        <Link to='/species/capuchin'>
          <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div className='tc'>
              <img src='static/images/species/capuchin.jpg' className='br-100 h4 w4 dib ba b--black-05 pa2' title='Kitty staring at you' />
              <h1 className='f3 mb2'>White-throated Capuchin</h1>
              <h2 className='f5 fw4 gray mt0'>Bailey (resuced to Jungle Friends)</h2>
            </div>
          </article>
        </Link>

        <Link to='/species/macaque'>
          <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div className='tc'>
              <img src='static/images/species/macaque.jpg' className='br-100 h4 w4 dib ba b--black-05 pa2' title='Kitty staring at you' />
              <h1 className='f3 mb2'>Long-tailed Macaque</h1>
              <h2 className='f5 fw4 gray mt0'>Breanna (rescued to Primate Rescue Center)</h2>
            </div>
          </article>
        </Link>

        <Link to='/species/marmoset'>
          <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <div className='tc'>
              <img src='static/images/species/marmoset.jpg' className='br-100 h4 w4 dib ba b--black-05 pa2' title='Kitty staring at you' />
              <h1 className='f3 mb2'>Common Marmoset</h1>
              <h2 className='f5 fw4 gray mt0'>BoBo (rescued to Jungle Friends)</h2>
            </div>
          </article>
        </Link>

      </App>
    )
  }
}

export default Species
