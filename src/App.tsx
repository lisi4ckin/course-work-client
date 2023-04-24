import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import fisherman from './pages/fisherman';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/fishermen' Component={fisherman} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
