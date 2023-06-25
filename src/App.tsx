import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Fisherman from "./pages/Fisherman";
import Fishes from "./pages/Fishes";
import Baits from "./pages/Baits";
import Diagrams from "./pages/Diagrams";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/fishermen' Component={Fisherman} />
          <Route path='/fishes' Component={Fishes} />
          <Route path='/baits' Component={Baits} />
          <Route path='/diagrams' Component={Diagrams} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;