import React from 'react'
import Select from 'react-select';
import { Grid, Segment } from 'semantic-ui-react'


class TravelOrigin extends React.Component {
    constructor() {
        super();
    }

    handleOnChange = (selectedOption) => {
        this.props.showDestination(selectedOption)
    }

    render () {
        let locationsOrigin = this.props.state.origin;
        let itemsOrigin = locationsOrigin.map((origin) =>
            [
                { value: origin.id, label: origin.name },
            ]
        );
        let optionsOrigin = []
        itemsOrigin.forEach(element => {
            optionsOrigin.push(element[0])
        });
        return (
           <Grid columns='centered'>
           <Grid.Column width={12}>
           <Select
              onChange={this.handleOnChange}
              options={optionsOrigin}
            />
           </Grid.Column>
         </Grid>
        )
    }
}


export default TravelOrigin
