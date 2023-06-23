
import axios from "axios";
import { useEffect, useState } from "react";
import '../index.css';
import { VictoryPie } from "victory-pie";
const Diagrams = () => {

  const myData = [
    { x: "Март", y: 900 },
    { x: "Август", y: 400 },
    { x: "Июнь", y: 300 },
  ];

  /* manage side effects */
//   useEffect(() => {
//     (async () => await load())();
//   }, []);

//   async function load() {
//     const result = await axios.get("/baits");
//     setBaits(result.data);
//   }

  
  return (
    <div className='main-content'>
      { <div>
        <VictoryPie
          data={myData}
          colorScale={["blue", "yellow", "red"]}
          radius={50}
        />
      </div> }
    </div>
  )
}

export default Diagrams;