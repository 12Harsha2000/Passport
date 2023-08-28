import React, { useState } from 'react';
import './List.css';

const List = () => {
  const [centers, setCenters] = useState([
    {
      name: 'Kochi Passport Center',
      address: '123 Main Street, Kochi',
      timings: '9:00 AM - 5:00 PM',
      color: 'kochi',
    },
    {
      name: 'Kottayam Passport Center',
      address: '456 Park Avenue, Kottayam',
      timings: '8:30 AM - 4:30 PM',
      color: 'kottayam',
    },
    {
      name: 'Kannur Passport Center',
      address: '789 Elm Road, Kannur',
      timings: '9:30 AM - 6:00 PM',
      color: 'kannur',
    },
    {
      name: 'Kozhikkode Passport Center',
      address: '567 Oak Lane, Kozhikkode',
      timings: '10:00 AM - 7:00 PM',
      color: 'kozhikkode',
    },
  ]);

  return (
    <div>
      <h1>Passport Centers List</h1>
      <div className="center-list">
        {centers.map((center, index) => (
          <div key={index} className={`center-card ${center.color}`}>
            <h2>{center.name}</h2>
            <p>{center.address}</p>
            <p>Timings: {center.timings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;