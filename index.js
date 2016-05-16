'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/app.jsx'

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Declarative route configuration
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
), document.querySelector('#content'));
