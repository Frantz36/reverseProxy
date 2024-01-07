import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Sign-up';
import DashBoard from './components/DashBoard/Dashboard';
import AuthGuard from './components/AuthGuard/AuthGuard';
import IsAuthGuard from './components/IsAuthGuard/IsAuthGuard';
import Tunnel from './components/Tunnel/Tunnel';

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
