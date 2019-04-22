import React from 'react'

import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

import { Grid, Checkbox } from 'semantic-ui-react'


class SubmitButton extends React.Component {
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
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content">Submit your travel</div>
                <div class="hidden content">
                Go Ahead!
                </div>
            </div>
        </Grid.Column>
        </Grid>
      );
    }
  }

  export default SubmitButton