import React, { Component } from 'react';

import './App.css';
import Travel from './components/dropdown'

import { Grid, Segment } from 'semantic-ui-react'

/* <Dropdown placeholder='State' search selection options={stateOptions} /> */

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      origin: [],
      myVar: true,
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(origin => this.setState({ origin }));
  }

  
  render() {
    return (
      <div className="App-header">
      <div className="top"></div>
      <Segment style={{backgroundColor:'rgba(102, 102, 102, 0.5)'}}>
      <Travel state={this.state} />
      </Segment>
      </div>
      )
  }
}

export default App; 
