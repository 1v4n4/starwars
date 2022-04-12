import React, { useState } from 'react';
import People from './People';
import Planets from './Planets';
import Species from './Species';

const Home = () => {
  const [page, setPage] = useState('people');
  return (
    <div>
    <button onClick={()=> setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
      <button onClick={() => setPage('species')}>Species</button>
      <div className="content">
              {page === 'people'  && <People />}
              {page === 'planets' && <Planets />}
              {page === 'species' && <Species />}
              </div>
    </div>

  )
}

export default Home;