// src/components/Map.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

// Fixing marker icon issue in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function HeatmapLayer({ heatmapData }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const heatLayer = L.heatLayer(heatmapData, { radius: 25, blur: 15, maxZoom: 17 });
    heatLayer.addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, heatmapData]);

  return null;
}

function Map({ userLocations, heatmapData }) {
  const centerPosition = [51.505, -0.09]; // Default center position

  return (
    <MapContainer center={centerPosition} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatmapLayer heatmapData={heatmapData} />
      {userLocations.map((location, index) => (
        <Marker key={index} position={location.coords}>
          <Popup>
            {location.name}: {location.alert}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

