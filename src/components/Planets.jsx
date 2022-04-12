import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets, {
    staleTime: 5000,
    onSuccess: () => console.log('Planets fetched successfully'),
    refetchOnMount: true,
  });
  return (
    <div>
      <h1>Planets</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error!</p>}
      {status === 'success' && (<div>
        {data.results.map(planet => <Planet planet={planet} key={planet.name} />)}
        </div>)}
    </div>
  )
}

export default Planets;