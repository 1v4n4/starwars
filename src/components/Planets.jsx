import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['planets', page], ()=>fetchPlanets(page), fetchPlanets, {
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
        <button onClick={() => setPage(1)}>Page 1</button>
        <button onClick={() => setPage(2)}>Page 2</button>
        <button onClick={() => setPage(3)}>Page 3</button>
        {data.results.map(planet => <Planet planet={planet} key={planet.name} />)}
        </div>)}
    </div>
  )
}

export default Planets;