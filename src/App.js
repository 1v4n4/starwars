import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import './CSS/App.css';
import Person from './components/Person';

const App = ()  => {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/person/:personName" element={<Person />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
