
import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css';
import BaitCrud from '../components/baits/BaitCrud';
const Baits = () => {

  const [baits, setBaits] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await axios.get("/baits");
    setBaits(result.data);
  }

  
  return (
    <div className='main-content'>
      <BaitCrud load={load} baits={baits}/>
    </div>
  )
}

export default Baits;