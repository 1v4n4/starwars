import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (hello, page) => {
  console.log(hello);
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  let page = 1;
  let hello = 'hello';
  const { data, status } = useQuery(['planets', hello, page], ()=>fetchPlanets(hello, page), fetchPlanets, {
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