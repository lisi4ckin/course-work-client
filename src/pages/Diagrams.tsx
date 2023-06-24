import React from 'react'
import FishermenCrud from '../components/fishermen/FishermenCrud';
import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css';
import { VictoryPie } from "victory-pie";

const Fisherman = () => {

  const [fishermens, setFishermens] = useState([]);
  const [diagramData, setDiagramData] = useState([{}]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    var count = 0;
    var y1 = 0;
    var y2 = 0;
    var y3 = 0;

    const result = await axios.get("/fishermen");
    setFishermens(result.data);
    fishermens.forEach(x => {
        count++;
        if (x['age'] < 31) {
          y1++;
        } else if (x['age'] >= 31 && x['age'] < 51) {
          y2++;
        } else if (x['age'] > 50) {
          y3++;
        }
    })
    let myData = [
            { x: "14-30", y: y1 },
            { x: "31-50", y: y2 },
            { x: "50+", y: y3 },
    ];

    setDiagramData(myData);
  }

  
  return (
    <div className='main-content'>   
    { <div>
      <VictoryPie
        data={diagramData}
        colorScale={["blue", "yellow", "red"]}
        radius={100}
      />
      </div> }
    </div>
  )
}

export default Fisherman;
