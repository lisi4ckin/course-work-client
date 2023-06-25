
import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css';
import FishCrud from '../components/fish/FishCrud';

const Fishes = () => {

  const [fishes, setFishes] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await axios.get("/fishes");
    setFishes(result.data);

  }

  return (
    <div className='main-content'>
      <FishCrud load={load} fishes={fishes}/>
    </div>
  )
}

export default Fishes;