// src/App.js
// src/App.js
import React from 'react';
import './App.css';
import Map from './components/Map';
import Alerts from './components/Alerts';

function App() {
  const userLocations = [
    { name: "User A", coords: [51.505, -0.09], alert: "Unsafe zone detected" },
    { name: "User B", coords: [51.515, -0.1], alert: "Incident reported" },
    { name: "User C", coords: [51.52, -0.12], alert: "SOS alert" }
  ];

  const heatmapData = [
    [51.505, -0.09, 0.5],
    [51.515, -0.1, 0.8],
    [51.52, -0.12, 0.6]
  ];

  const alerts = [
    { name: "User A", location: "Location A", type: "Unsafe zone", status: "In progress" },
    { name: "User B", location: "Location B", type: "Incident reported", status: "Resolved" },
    { name: "User C", location: "Location C", type: "SOS alert", status: "In progress" }
  ];

  return (
    <div className="App">
      <h1>Police Dashboard for Women's Safety</h1>
      <Map userLocations={userLocations} heatmapData={heatmapData} />
      <Alerts alerts={alerts} />
    </div>
  );
}

export default App;
