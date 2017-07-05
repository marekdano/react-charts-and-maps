
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import studentTravel from './data/student-travel';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const InitialMap = withGoogleMap(props => {
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 42.920, lng: -78.801 }}>

			{props.markers.map((marker, index) => (
				<Marker
					key={index}
					{...marker}
					onClick={() => props.onMarkerClick(marker)}
				>
				</Marker>
			))}
		</GoogleMap>
	)
});

class Map extends Component {
	constructor() {
		super();
		this.state = {
			markers: studentTravel.result.map(place => {
				return {
					position: { lat: place.lat, lng: place.lng }
				}
			})
		}
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
	}
	
	
	handleMarkerClick(targetMarker) {
		console.log("click on this marker", targetMarker);
	} 
	
	render() {
		console.log("markers", this.state.markers);
		return (
			<div className="map">
				<InitialMap
					containerElement={
						<div style={{ height: `100%` }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
					markers={this.state.markers}
					onMarkerClick={this.handleMarkerClick}
				/>
			</div>
		
		);
	}
}

export default Map;