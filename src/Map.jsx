
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const InitialMap = withGoogleMap(props => {
	console.log("In InitialMap")
	return (
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: -34.397, lng: 150.644 }}
		/>
	)
});


class Map extends Component {
	render() {
		return (
			<div className="map">
				<InitialMap
					containerElement={
						<div style={{ height: `100%` }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>
		
		);
	}
}

export default Map;