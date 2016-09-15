import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './home'
import Laws from './laws'
import Species from './species'
import Oops from './oops'
import Share from './share'
import Help from './help'

render(
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/laws' component={Laws} />
    <Route path='/species' component={Species} />
    <Route path='/share' component={Share} />
    <Route path='/help' component={Help} />
    <Route path='*' component={Oops} />
  </Router>,
  document.getElementById('root')
)
