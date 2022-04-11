import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className="planet">
      <h2>{planet.name}</h2>
      <p>{planet.population}</p>
      <p>{planet.climate}</p>
      <p>{planet.terrain}</p>
    </div>
  );
}

export default Planet;