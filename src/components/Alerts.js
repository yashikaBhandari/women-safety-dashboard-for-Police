// src/components/Alerts.js
// src/components/Alerts.js
import React from 'react';

function Alerts({ alerts }) {
  return (
    <div>
      <h2>Active Alerts</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Location</th>
            <th>Incident</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, index) => (
            <tr key={index}>
              <td>{alert.name}</td>
              <td>{alert.location}</td>
              <td>{alert.type}</td>
              <td>{alert.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alerts;
