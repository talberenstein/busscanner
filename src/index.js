import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Core from './Core'
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

/* Import Redux store and the actions */
import configureStore  from './store/createStore';
import {toggleTravelForm, handleInputChange} from './actions';

const store = configureStore();
 
//Note that subscribe() returns a function for unregistering the listener
 
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

/* returns isContactFormHidden returns false */
store.dispatch(toggleTravelForm());
/* returns isContactFormHidden returns false */
store.dispatch(toggleTravelForm());
 
/* updates the state of contacts.newContact object */
store.dispatch(handleInputChange('origin', 'Seoul'))
 

unsubscribe();

const routing = (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/core/" component={Core} />
  </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
