import React, { Component } from 'react';

import './App.css';
import { Segment } from 'semantic-ui-react'

import DDOrigin from './components/DDOrigin'
import DDDestination from './components/DDDestination'
import DateOrigin from './components/dateOrigin'
import DateReturn from './components/dateReturn'
import SubmitButton from './components/buttonComponent';

/* <Dropdown placeholder='State' search selection options={stateOptions} /> */

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      origin: [],
      destination: [],
      originSelected: '',
      destinationSelected: '',
      dateDepartSelected: '',
      dateReturnSelected: '',
      checked: false,
    }

    this.getLocations = (url) => {
      return (
        fetch('http://localhost:3000/locations'+url)
        .then(response => response.json())
      )}
    
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
      })}

    this.showSubmitOneWay = (dateDepartSelected) => {
      this.setState({
        dateDepartSelected,
      })}

    this.showSubmitReturn = (dateReturnSelected) => {
      this.setState({
        dateReturnSelected,
      })}

    this.showDateReturn = () => {
      this.setState({
        checked: !this.state.checked
      })
    }}


  componentDidMount() {
    this.getLocations('')
    .then(origin => this.setState({ origin }))
  }
  render() {
    return (
      <div className="App-header">
      <div className="top"></div>
      <Segment style= {{
        backgroundColor:'rgba(102, 102, 102, 0.5)',
        position: 'fixed',
        width: '100vh',
        left: '50vh'
      }}
      >
      <div>
      <DDOrigin 
        showDestination = {this.showDestination} 
        state = {this.state} 
      />
      </div>
      <div style={{ display: this.state.originSelected ? 'block' : 'none' }}>
      <DDDestination  
        showDates = {this.showDates}
        state = {this.state} 
      />
      </div>
      <div style={{ display: this.state.destinationSelected ? 'block' : 'none' }}>
        <DateOrigin
          showSubmit = {this.showSubmitOneWay}
          showDateReturn = {this.showDateReturn}
          state = {this.state}
        />
      </div>
      <div style={{ display: this.state.checked ? 'block' : 'none' }}>
        <DateReturn
          showSubmit = {this.showSubmitReturn}
          state = {this.state}
        />
      </div>
      <div style={{
        display: (this.state.dateDepartSelected && !this.state.checked) || (this.state.dateReturnSelected && this.state.checked) ? 'block' : 'none' 
        }}>
        <SubmitButton
        />
      </div>
      </Segment>
      </div>
      )
  }
}

export default App; 
