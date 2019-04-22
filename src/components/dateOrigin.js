import React from 'react'

import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

import { Grid, Checkbox } from 'semantic-ui-react'


class DateTimeForm extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        date: '',
        time: '',
        dateTime: '',
        datesRange: ''
      };
    }
   
    handleChange = (event, {name, value}) => {
        console.log(name, value)
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
        this.props.showSubmit(value)     
        }
    }

   
    render() {
      return (
        <Grid columns='centered'>
        <Grid.Column width={6}>
          <DateInput
            name="date"
            placeholder="Date Departure"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
          />
        </Grid.Column>
        <Grid.Column width={6}>
        <Checkbox/>
            <span style={{color: 'purple', marginLeft: 10}}><b>Do you want to return?</b></span>
        </Grid.Column>
        </Grid>
      );
    }
  }

  export default DateTimeForm