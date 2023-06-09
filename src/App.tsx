import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FishermenCrud from "./components/fishermen/FishermenCrud";

function App() {
  const [fishermens, setFishermens] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await axios.get("/fishermen");
    setFishermens(result.data);
  }

  return (
    <div>
      <h1 className="text-center">List Of Publisher</h1>
      <FishermenCrud load={load} fishermens={fishermens} />
    </div>
  );
}

export default App;