import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 31.5204, // Lahore
  lng: 74.3587,
};

const MapWithMarkers = ({ origin, destination }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDdIO5T54ud3p2rOvNtAiVvInJ14Faib0Q">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origin}
        zoom={7}
      >
        <Marker position={origin} label="A" />
        <Marker position={destination} label="B" />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithMarkers;
