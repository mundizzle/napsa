import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import './index.css';

import Home from './home';
import Laws from './laws';
import Species from './species';
import SpeciesDetails from './species_details';
import Share from './share';
import Help from './help';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/laws" component={Laws} />
    <Route path="/species" component={Species} />
    <Route path="/species/:id" component={SpeciesDetails} />
    <Route path="/share" component={Share} />
    <Route path="/help" component={Help} />
  </Router>,
  document.getElementById('root')
);