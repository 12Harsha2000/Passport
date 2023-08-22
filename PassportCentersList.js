import React from './Passport';

function PassportCentersList({ centers }) {
  return (
    <div>
      <h2>Passport Centers:</h2>
      <ul>
        {centers.map(center => (
          <li key={center.id}>{center.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PassportCentersList;