import React from 'react';
import currentData from '../data/current.json';

const Current = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Currently Doing</h2>
      <ul className="list-group">
        {currentData.map((item, idx) => (
          <li className="list-group-item" key={idx}>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Current;
