import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// style={{ width: "100%", height: "360px", position: "relative" }}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "380px", position: "relative" }}
        initialCenter={{
          lat: 34.0600359,
          lng: -118.445447
        }}
        zoom={15}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxT1yZXPbkpcW5T63iRmM9EIgNR4F0O_w"
})(MapContainer);
