import React from 'react'
import FishermenCrud from '../components/fishermen/FishermenCrud';
import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css';

const Fisherman = () => {

  const [fishermens, setFishermens] = useState([]);
  const [refFishes, setRefFishes] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await axios.get("/fishermen");
    setFishermens(result.data);
    const resultFishes = await axios.get("/fishes/ref");
    setRefFishes(resultFishes.data);
  }

  
  return (
    <div className='main-content'>
      <FishermenCrud load={load} fishermens={fishermens} fishes={refFishes} />
    </div>
  )
}

export default Fisherman;
