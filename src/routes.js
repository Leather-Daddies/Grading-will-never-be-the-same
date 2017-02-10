import React from 'react';
import { Route, indexRoute } from 'react-router';
import App from './components/App.jsx'

module.exports = (
    <Route path='/' component={App} >
      {/*indexRoute dictates the default component rendered at the root path*/}
    </Route>
  )
