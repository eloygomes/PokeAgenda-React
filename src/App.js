import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Component/Page/Home';
import Page01 from './Component/Page/Page01';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokeagenda' element={<Page01/>}/>
      </Routes>
    </Router>
  );
}

export default App;
