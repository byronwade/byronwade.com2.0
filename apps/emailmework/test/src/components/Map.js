"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxClient from "@mapbox/mapbox-sdk/services/geocoding";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

const locationData = {
	address: "7737 CA-9, Ben Lomond, CA 95005",
};

export default function Map() {
	const mapContainerRef = useRef(null);

	useEffect(() => {
		const mapContainer = mapContainerRef.current;
		const map = new mapboxgl.Map({
			container: mapContainer ? mapContainer : "",
			style: "mapbox://styles/byronwade/clnfa4pyb01b701ps8jw09pik",
			center: [-122.4194, 37.7749], // Default center for San Francisco, this will change once the geocode returns.
			zoom: 12,
		});

		map.on("load", () => {
			const client = MapboxClient({ accessToken: mapboxgl.accessToken });
			client
				.forwardGeocode({ query: locationData.address })
				.send()
				.then((response) => {
					const feature = response.body.features[0];
					if (feature) {
						const coordinates = feature.geometry.coordinates;

						// Extracting the business details from the feature
						const businessName = feature.text; // Business name
						const fullAddress = feature.place_name; // Full address including city, state, etc.
						const category = feature.properties.category; // Business category, e.g., "food"

						// Create a HTML string to represent the popup content
						const popupHTML = `
                  <h3>${businessName}</h3>
                  <p>${fullAddress}</p>
                  <strong>Category:</strong> ${category}
              `;

						const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHTML);

						// Add marker with a popup
						new mapboxgl.Marker()
							.setLngLat(coordinates)
							.setPopup(popup) // Set the popup to the marker
							.addTo(map)
							.togglePopup(); // Open the popup immediately

						map.flyTo({
							center: coordinates,
							zoom: 15,
						});
					}
				});
		});

		return () => map.remove();
	}, []);

	return <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />;
}
