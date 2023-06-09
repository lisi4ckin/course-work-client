import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Fisherman from "./pages/Fisherman";
import Fishes from "./pages/Fishes";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/fishermen' Component={Fisherman} />
          <Route path='/fishes' Component={Fishes} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;