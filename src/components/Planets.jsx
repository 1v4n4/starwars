import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPages } from '../API';

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['planets', 'planets', page], ()=>fetchPages('planets', page), {
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
        {data?.results?.map(planet => <Link to={`/planet/${planet.name}`} state={{ url: planet.url }} key={planet.name}>{planet.name}</Link>)}
        </div>)}
    </div>
  )
}

export default Planets;