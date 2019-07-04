
import React from 'react';
import PropTypes from 'prop-types';

const TableOfBusStops = (props) => {
	const stopsData = props.stopsData;
	const tableBody = stopsData && stopsData.map(stop => {
		return (
			<div key={stop.id} className="row">
				<div className="cell">{stop.name}</div>
				<div className="cell">{stop.students_count}</div>
				<div className="cell">{stop.users_count}</div>
				<div className="cell">{stop.routes_count}</div>
			</div>
		)
	})

	return (
		<div>
			<div className="table">
				<div className="row">
					<div className="cell title">Stops table</div>
					<div className="cell"></div>
					<div className="cell"></div>
					<div className="cell"></div> 
				</div>
				<div className="row header">
					<div className="cell" >Stop Name</div>
					<div className="cell">No Students</div>
					<div className="cell">No Users</div>
					<div className="cell">No Routes</div>
				</div>
				{tableBody}
			</div>
		</div>
	)
}

TableOfBusStops.propTypes = {
  stopsData: PropTypes.array
};

export default TableOfBusStops;
