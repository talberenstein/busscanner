import React, { Component } from 'react';

import './App.css';
import Travel from './components/dropdown'

/* <Dropdown placeholder='State' search selection options={stateOptions} /> */

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }
  
  render() {
    return (
      <div className="App-header">
      <div className="top"></div>
      <Travel state={this.state} />
      </div>
      )
  }
}

export default App; 
