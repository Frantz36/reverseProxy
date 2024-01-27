import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Sign-up';
import DashBoard from './components/DashBoard/Dashboard';
import AuthGuard from './components/AuthGuard/AuthGuard';
import IsAuthGuard from './components/IsAuthGuard/IsAuthGuard';
import Tunnel from './components/Tunnel/Tunnel';
import React from 'react';

import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/tunnel' element={<AuthGuard><Tunnel/></AuthGuard>}></Route>
          <Route path='/' element={<IsAuthGuard><SignUp /></IsAuthGuard> } />
          <Route path='/dashboard' element={<AuthGuard><DashBoard /></AuthGuard>} />
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};