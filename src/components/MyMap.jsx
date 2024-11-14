import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the default center of the map and its zoom level
const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 9.9312, // Example latitude (San Francisco)
  lng: 76.2673, // Example longitude
};

function MyMap() {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Optional: Add markers or other components */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
