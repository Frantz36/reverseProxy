import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import React from 'react';

import './styles/App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Homepage from './pages/Homepage';
import Endpoints from './pages/Endpoints';
import Billing from './pages/Billing';
import Settings from './pages/Settings';

function App() {
  const [show, setShow] = useState("false")

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className='comp'>
            <Sidebar show={show}/>
          <div className='rest'>
            <Navbar onClick={handleToggle} />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/Homepage' element={<Homepage />} />
              <Route path='/Endpoints' element={<Endpoints />} />
              <Route path='/Billing' element={<Billing />} />
              <Route path='/Settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
