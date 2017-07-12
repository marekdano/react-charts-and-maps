
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

class TableOfBusStops extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		const stopsData = this.props.stopsData;
		const tableBody = stopsData && stopsData.map(stop => {
			return (
				<tr>
					<th>{stop.name}</th>
					<th>{stop.students_count}</th>
					<th>{stop.users_count}</th>
					<th>{stop.routes_count}</th>
				</tr>
			)
		})
		return (
			<div>
				<table>
					<tr id="header">
						<th>Stops table</th> 
					</tr>
					<tr>
						<th>Stop Name</th>
						<th>No Students</th>
						<th>No Users</th>
						<th>No Routes</th>
					</tr>
					{tableBody}
				</table>

			</div>
		)
	}
}

TableOfBusStops.propTypes = {
  stopsData: PropTypes.array
};

export default TableOfBusStops;