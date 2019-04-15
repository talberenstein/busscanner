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
           <Grid.Column width={11}>
             <Segment style={{background:(255,255,255,1)}}>
             <select className="originDropdown ui search dropdown loading">
                {optionItems}
             </select>
             <select style={{Left: 80}} className="originDropdown ui search dropdown loading">
                {optionItems}
             </select>
             </Segment>
           </Grid.Column>
         </Grid>
        )
    }
}


export default Dropdown
