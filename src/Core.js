import React from 'react'
import { Header, Segment, Icon, Step, Grid } from 'semantic-ui-react'

const Core = () => (
<Grid columns="equal">
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

  <Grid.Row>
    <Grid.Column>
      <Segment>
      <Step.Group>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
      </Segment>
    </Grid.Column>
  </Grid.Row>

</Grid>
  
)

export default Core