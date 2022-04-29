import React from 'react';
import useDetailsData from '../hooks/useDetailsData';
import { useLocation } from 'react-router-dom';

const Person = () => {
  const location = useLocation();
  const { url } = location.state;
  const { data, status } = useDetailsData('person', url);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error!</p>}
      {status === 'success' && (
        <div>
          <h1>{data?.name}</h1>
          <p>Height: {data?.height}</p>
          <p>Mass: {data?.mass}</p>
          <p>Gender: {data?.gender}</p>
          {/* <p>{data?.homeworld}</p> */}
          {/* {data?.films.map(film => return <p>film</p>)} */}
        </div>)}
    </div>
  )
};

export default Person;