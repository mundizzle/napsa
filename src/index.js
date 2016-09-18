import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './pages/home'
import Laws from './pages/laws'
import State from './pages/laws/state'
import Species from './pages/species'
import Specie from './pages/species/specie'
import Oops from './pages/oops'
import Share from './pages/share'
import Help from './pages/help'

render(
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/laws' component={Laws} />
    <Route path='/laws/:state' component={State} />
    <Route path='/species' component={Species} />
    <Route path='/species/:specie' component={Specie} />
    <Route path='/share' component={Share} />
    <Route path='/help' component={Help} />
    <Route path='*' component={Oops} />
  </Router>,
  document.querySelector('[data-root]')
)
