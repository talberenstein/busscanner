import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


import { Grid } from 'semantic-ui-react'


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
            <Button animated='fade'>
            <Button.Content visible>Book your travel</Button.Content>
            <Button.Content hidden><Icon name='arrow right' /></Button.Content>
            </Button>
        </Grid.Column>
        </Grid>
      );
    }
  }

  export default SubmitButton