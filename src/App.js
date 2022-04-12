import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import Navbar from './components/Navbar';
import './CSS/App.css';
import Planets from './components/Planets';
import People from './components/People';

const App = ()  => {
  const [page, setPage] = useState('people');
  return (
    <>
    <div className="App">
      <Navbar setPage={setPage}/>
        <div className="content">
          { page === 'people' ? <People /> : <Planets />}
        </div>
    </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
