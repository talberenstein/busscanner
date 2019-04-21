import React from 'react'
import Select from 'react-select';
import { Grid, Segment } from 'semantic-ui-react'


class TravelDestination extends React.Component {
    constructor() {
        super();
    }
    state = {
        selectedDestination: false,
        selectedOption: null,
        filterOptions: null,
        }

    handleOnChange = (selectedOption) => {
        this.setState({ selectedOption});
    }

    render () {
        const { selectedOption } = this.state;
        let locationsDestination = this.props.state.origin;
        let itemsDestination = locationsDestination.map((origin) =>
            [
                { value: origin.id, label: origin.name },
            ]
        );
        let optionsDestination = []
        itemsDestination.forEach(element => {
            itemsDestination.push(element[0])
        });

        return (
           <Grid columns='centered'>
           <Grid.Column width={12}>
           <Select
              onChange={this.handleOnChange}
              options={optionsDestination}
            />
           </Grid.Column>
         </Grid>
        )
    }
}


export default TravelDestination