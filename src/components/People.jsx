import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  console.log(data);
  return (
    <div>
      <h1>People</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error!</p>}
      {status === 'success' && (<div>{data.results.map(person => <Person person={person} key={person.name}/>)}</div>)}
    </div>
  )
}

export default People;