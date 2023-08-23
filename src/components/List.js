import React, { useState } from 'react';

const List = () => {
  const [centers, setCenters] = useState([
    {
      name: 'Kochi Passport Center',
      address: '123 Main Street, Kochi',
      timings: '9:00 AM - 5:00 PM',
    },
    {
      name: 'Kottayam Passport Center',
      address: '456 Park Avenue, Kottayam',
      timings: '8:30 AM - 4:30 PM',
    },
    {
      name: 'Kannur Passport Center',
      address: '789 Elm Road, Kannur',
      timings: '9:30 AM - 6:00 PM',
    },
    {
      name: 'Kozhikkode Passport Center',
      address: '567 Oak Lane, Kozhikkode',
      timings: '10:00 AM - 7:00 PM',
    },
  ]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Passport Centers List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {centers.map((center, index) => (
          <li key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginTop: 0 }}>{center.name}</h2>
            <p style={{ margin: '10px 0' }}>{center.address}</p>
            <p style={{ margin: '0' }}>Timings: {center.timings}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
