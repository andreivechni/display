import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

// To be implemented

const MapContainer = () => {
  return (
    <div>
      <Map
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
})(MapContainer);
