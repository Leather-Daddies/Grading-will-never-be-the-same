import 'babel-polyfill'
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';

import routes from './routes';

render( <Router Route={routes} history={browserHistory}></Router>,
  document.getElementById('root-container'))
