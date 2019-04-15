import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'


class Dropdown extends React.Component {
    constructor() {
        super();
    }

    render () {
        let locations = this.props.state.data;
        console.log(locations)
        let optionItems = locations.map((data) =>
                <option key={data.name}>{data.name}</option>
            );

        return (
           <Grid columns='equal centered'>
           <Grid.Column width={12}>
             <Segment style={{background:(255,255,255,0.7)}}>
             <select className="originDropdown ui search dropdown loading">
                {optionItems}
             </select>
             <select style={{marginLeft: 40}} className="originDropdown ui search dropdown loading">
                {optionItems}
             </select>
             </Segment>
           </Grid.Column>
         </Grid>
        )
    }
}


export default Dropdown
