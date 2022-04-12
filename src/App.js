import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './CSS/App.css';
import Planets from './components/Planets';
import People from './components/People';
import Species from './components/Species';

const App = ()  => {
  const [page, setPage] = useState('people');
  return (
    <div className="App">
      <Navbar setPage={setPage}/>
        <div className="content">
        {page === 'people'  && <People />}
        {page === 'planets' && <Planets />}
        {page === 'species' && <Species />}
        </div>
    </div>
  );
}

export default App;
