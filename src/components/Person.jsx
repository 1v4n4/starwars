import React from 'react';

const Person = ({ person }) => {
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.gender}</p>
      <p>{person.birth_year}</p>
    </div>
  )
};

export default Person;