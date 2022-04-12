import React from 'react';

const Creatures = ({ creatures }) => (
  <div>
    <h1>{creatures.name}</h1>
    <p>{creatures.classification}</p>
    <p>{creatures.designation}</p>
    <p>{creatures.average_height}</p>
    <p>{creatures.lifespan}</p>
    {/* <p>creatures.homeworld</p> */}
  </div>
);

export default Creatures;