import React, { useState, useEffect } from "react";
import "../src/Styles/App.css";
import Frase from "./Components/Frase";
import { fondo } from "./helpers/helpers";

function App() {
  const [frase, setFrase] = useState({});
  const [hora, setHora] = useState(0);
  const [load, setLoad] = useState(false);

  const getPrhase = async () => {
    setHora(parseInt(new Date().getHours()));
    setLoad(true);
    const api = await fetch("https://type.fit/api/quotes");
    const response = await api.json();
    setFrase(response[Math.floor(Math.random() * response.length)]);
    setLoad(false);
  };

  useEffect(() => {
    getPrhase();
  }, []);

  return (
    <div className="App">
      <img src={fondo(hora)} alt="fondo de pagina" className="fondo" />
      <Frase getPrhase={getPrhase} frase={frase} load={load} />
    </div>
  );
}

export default App;
