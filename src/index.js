import 'babel-polyfill'
import React from 'react';
//browserHistory keeps a log of the users history path and keeps it attached to the react router
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

import routes from './components/routes';

render( <Router routes={routes} history={browserHistory} />,
  document.getElementById('root-container'))
