import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Person from './Person';
import { fetchPages } from '../API';
import usePeopleData from '../hooks/usePeopleData';

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status } = usePeopleData(page);

  console.log(data);

  return (
    <div>
      <h1>People</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error!</p>}
      <button onClick={() => setPage(old => old-1 > 0 ? old -1 : old)} disabled={page === 1}>Previous</button>
      {page}
      <button onClick={() => setPage(old => data.next ? old + 1 : old)} disabled={!data || !data.next}>Next</button>
      {status === 'success' && (<div>{data?.results?.map(person => <Person person={person} key={person.name}/>)}</div>)}
    </div>
  )
}

export default People;