import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/Sign-up';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
