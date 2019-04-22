import React, { Component } from 'react';

import './App.css';
import DDOrigin from './components/DDOrigin'
import DDDestination from './components/DDDestination'

import { Segment } from 'semantic-ui-react'

/* <Dropdown placeholder='State' search selection options={stateOptions} /> */

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      origin: [],
      destination: [],
      originSelected: '',
      destinationSelected: '',
    }

    this.getLocations = (url) => {
      return (
        fetch('http://localhost:3000/locations'+url)
        .then(response => response.json())
      )
    }
    
    this.showDestination = (originSelected) => {
      this.setState({
        originSelected,
      })
      this.getLocations('')
      .then(destination => this.setState({ destination }));
    }

    this.showDates = (destinationSelected) => {
      this.setState({
        destinationSelected,
      })
    }
  
  
  
  
  
  }

  componentDidMount() {
    this.getLocations('')
    .then(origin => this.setState({ origin }))
  }


  render() {
    return (
      <div className="App-header">
      <div className="top"></div>
      <Segment style= {{backgroundColor:'rgba(102, 102, 102, 0.5)'}}>
      <div>
      <DDOrigin 
        showDestination={this.showDestination} 
        state={this.state} 
      />
      </div>
      <div style={{display: this.state.originSelected ? 'block' : 'none' }}>
      <DDDestination  
        showDates={this.showDates}
        state={this.state} 
      />
      </div>
      </Segment>
      </div>
      )
  }
}

export default App; 
