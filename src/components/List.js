import React, { useState } from 'react';
import './List.css'; 
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
      <h1>Passport Centers List</h1>
      <ul>
        {centers.map((center, index) => (
          <li key={index}>
            <h2>{center.name}</h2>
            <p>{center.address}</p>
            <p>Timings: {center.timings}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
