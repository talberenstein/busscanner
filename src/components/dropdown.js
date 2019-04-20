import React from 'react'
import CreatableSelect from 'react-select/lib/Creatable';
import Select from 'react-select';
import { Grid, Segment } from 'semantic-ui-react'


class TravelOrigin extends React.Component {
    constructor() {
        super();
    }
    state = {
        selectedOrigin: false,
        selectedOption: null,
        filterOptions: null,
    }

    handleOnChange = (selectedOption) => {
        this.setState({ selectedOption});
    }

    render () {
        const { selectedOption } = this.state;
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
