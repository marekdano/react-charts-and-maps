/*global google*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import studentTravel from './data/student-travel';
import { withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";


const InitialMap = withGoogleMap(props => {
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={props.center}>

			{props.markers.map((marker, index) => (
				<Marker
					key={index}
					{...marker}
					onClick={() => props.onMarkerClick(marker)}
				/>
			))}
			<Polyline
				path={props.coords}
			/>
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
			}),
			coords: studentTravel.result.map(place => {
				return {
					lat: place.lat, 
					lng: place.lng
				}
			})
		};

		this.handleMarkerClick = this.handleMarkerClick.bind(this);
	}
	
	
	handleMarkerClick(targetMarker) {
		console.log("click on this marker", targetMarker);
	} 
	
	minMaxLatAndLng(studentTravel) {
		const listOfLat = studentTravel.map(obj => obj.lat);
		const listOfLng = studentTravel.map(obj => obj.lng);
		const lat = (Math.min(...listOfLat) + Math.max(...listOfLat)) / 2;
		const lng = (Math.min(...listOfLng) + Math.max(...listOfLng)) / 2;
	
		return { lat, lng }	
	}
	
	render() {
		console.log("markers", this.state.markers);
		const mapCenter = this.minMaxLatAndLng(studentTravel.result);

		return (
			<div className="map">
				<InitialMap
					containerElement={
						<div style={{ height: `100%` }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
					center={mapCenter}
					markers={this.state.markers}
					coords={this.state.coords}
					onMarkerClick={this.handleMarkerClick}
				/>
			</div>
		
		);
	}
}

export default Map;