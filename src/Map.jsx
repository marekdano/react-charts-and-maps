/*global google*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import studentTravel from './data/student-travel';
import { withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps";


const InitialMap = withGoogleMap(props => {
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={props.center}
			mapTypeId='roadmap'
		>

			{props.markers.map((marker, index) => (
				<Marker
					key={index}
					position={marker.position}
					onClick={() => props.onMarkerClick(marker)}
					onMouseOver={() => props.onMarkerHover(marker)}
					onMouseOut={() => props.onMarkerHide(marker)}
				>
					{marker.showInfo && (
						<InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
							<div id="info-window">
								<div>Students: {marker.infoContent.studentsCount}</div>
								<div>Routes: {marker.infoContent.routesCount}</div>
							</div>
						</InfoWindow>
					)}

					{marker.hover && (
						<InfoWindow
							onCloseClick={() => props.onMarkerClose(marker)}>
							<div id="info-window">
								<div>Bus stop: <em>{marker.infoContent.name}</em></div>
							</div>
						</InfoWindow>
					)}
				</Marker>
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
					position: { lat: place.lat, lng: place.lng },
					showInfo: false,
					infoContent: {
						name: place.name,
						studentsCount: place.students_count,
						routesCount: place.routes_count 
					}
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
		this.handleMarkerClose = this.handleMarkerClose.bind(this);
		this.handleMarkerHover = this.handleMarkerHover.bind(this);
		this.handleMarkerHide = this.handleMarkerHide.bind(this);
	}
	
	handleMarkerClick(targetMarker) {
		console.log("click on this marker", targetMarker);
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
						hover: false
          };
        }
        return marker;
      }),
    });
  }

	handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
						hover: false
          };
        }
        return marker;
      }),
    });
  }

	handleMarkerHover(targetMarker) {
		console.log("Marker has been hovered.")
		this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: true
          };
        }
        return marker;
      }),
    });
	}

	handleMarkerHide(targetMarker) {
		console.log("info window has been removed.")
		this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            hover: false
          };
        }
        return marker;
      }),
    });
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
        	onMarkerClose={this.handleMarkerClose}
					onMarkerHover={this.handleMarkerHover}
					onMarkerHide={this.handleMarkerHide}
				/>
			</div>
		
		);
	}
}

export default Map;