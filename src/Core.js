import React from 'react'
import { Header, Segment, Icon, Step, Grid } from 'semantic-ui-react'

import './Core.css'

const Core = () => (
<Grid columns="centered">
  <Grid.Row>
    <Grid.Column>
      <Segment clearing>
        <Header as='h2' floated='right'>
          BusScanner.io
        </Header>
        <Header as='h2' floated='left'>
          BusScanner.io
        </Header>
      </Segment>
    </Grid.Column>
  </Grid.Row>

  <Grid.Row style={{marginTop: -30}}>
    <Grid.Column>
      <Segment>
    
    <Step.Group widths={4}>
    <Step active>
      <Icon name='bus' />
      <Step.Content>
        <Step.Title>Trip</Step.Title>
        <Step.Description>put dateFrom - dateTo - Origin - Destination</Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='clipboard' />
      <Step.Content>
        <Step.Title>Seats</Step.Title>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Payment</Step.Title>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='handshake' />
      <Step.Content>
        <Step.Title>Confirmation</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>

      </Segment>
    </Grid.Column>
  </Grid.Row>

</Grid>
  
)

export default Core