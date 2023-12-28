import MapComponent from '../components/map';

// Set your initial coordinates and Mapbox token
const initialLng = -122.4376; // Example start longitude
const initialLat = 37.7577; // Example start latitude
const destinationLng = -122.4782; // Example destination longitude
const destinationLat = 37.8199; // Example destination latitude
const mapboxToken =
  'pk.eyJ1IjoiYnlyb253YWRlIiwiYSI6ImNqOG9xdzJ4djA3c3AzM3J6ZWRyemNoczAifQ.YdEsyaOK8qvPGZ8eU43W4g'; // Replace with your Mapbox token

export default function Home() {
  return (
    <>
      <div>Tour Santa Cruz</div>
      <MapComponent
        initialLng={initialLng}
        initialLat={initialLat}
        destinationLng={destinationLng}
        destinationLat={destinationLat}
        token={mapboxToken}
      />
    </>
  );
}
