import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './CSS/App.css';
import Person from './components/Person';
import Planet from './components/Planet';

const App = ()  => {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/person/:personName" element={<Person />} />
          <Route path="/planet/:planetName" element={<Planet />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
