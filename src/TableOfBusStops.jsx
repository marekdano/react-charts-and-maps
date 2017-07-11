
import React, { Component } from 'react';
import * as _ from 'lodash';

class TableOfBusStops extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		console.log("Stops data", this.props.stopsData);
		return (
			<div> TableOfBusStops works!</div>
		)
	}
}



export default TableOfBusStops;
  

  