import React from 'react';
import { useLocation } from 'react-router-dom';
import useDetailsData from '../hooks/useDetailsData';


const Planet = ({ planet }) => {
  const location = useLocation();
  const url = location.state.url;
  const { data, status } = useDetailsData('planet', url);

  return (
    <div className="planet">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error!</p>}
      {status === 'success' && (
        <>
      <h2>{data?.name}</h2>
      <p>Population: {data?.population}</p>
      <p>Climate: {data?.climate}</p>
          <p>Terrain: {data?.terrain}</p>
          <p>Gravity: {data?.gravity}</p>
          <p>Rotation Period: {data?.rotation_period}</p>
          <p>Orbital Period: {data?.orbital_period}</p>
          <p>Surface Water: {data?.surface_water}</p>
          <p>Diameter: {data?.diameter}</p>
          <p>Films: {data?.films}</p>
          <p>Residents: {data?.residents}</p>
          </>)}
    </div>
  );
}

export default Planet;