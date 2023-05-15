import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import fisherman from './pages/fisherman';
import FishermanCard from './components/FishermanCard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/fishermen' Component={fisherman} />
          <Route path='/fishermen/:id' Component={FishermanCard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
