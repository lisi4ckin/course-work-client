import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Fisherman from "./pages/Fisherman";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/fishermen' Component={Fisherman} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;