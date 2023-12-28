// components/MapComponent.js
'use client';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = ({ initialLng, initialLat, destinationLng, destinationLat, token }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = token;

    const initializeMap = () => {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [initialLng, initialLat],
        zoom: 12
      });

      const newMarker = new mapboxgl.Marker().setLngLat([initialLng, initialLat]).addTo(newMap);

      setMap(newMap);
      setMarker(newMarker);

      // Fetch route and animate marker
      fetchRouteAndAnimateMarker(
        newMap,
        newMarker,
        [initialLng, initialLat],
        [destinationLng, destinationLat]
      );
    };

    if (!map) initializeMap();
  }, [map, token, initialLng, initialLat, destinationLng, destinationLat]);

  // Function to fetch route and animate marker
  const fetchRouteAndAnimateMarker = async (map, marker, start, end) => {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start.join(',')};${end.join(
        ','
      )}?geometries=geojson&access_token=${token}`,
      { method: 'GET' }
    );
    const json = await query.json();
    const route = json.routes[0].geometry.coordinates;

    const animateMarker = (timestamp) => {
      const speedFactor = 0.1; // Adjust speed here
      const idx = Math.floor((timestamp / 1000) * speedFactor) % route.length;
      marker.setLngLat(route[idx]);

      requestAnimationFrame(animateMarker);
    };

    requestAnimationFrame(animateMarker);
  };

  return <div ref={mapContainerRef} style={{ height: '400px' }} />;
};

export default MapComponent;
