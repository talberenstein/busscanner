import React from 'react'
import Select from 'react-select';
import { Grid } from 'semantic-ui-react'


class TravelDestination extends React.Component {
    constructor() {
        super();
    }
    state = {

        selectedOption: null,

        }

    handleOnChange = (selectedOption) => {
        this.props.showDates(selectedOption)
    }

    render () {

        let locationsDestination = this.props.state.origin;
        let itemsDestination = locationsDestination.map((origin) =>
            [
                { value: origin.id, label: origin.name },
            ]
        );
        let optionsDestination = []
        itemsDestination.forEach(element => {
            optionsDestination.push(element[0])
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