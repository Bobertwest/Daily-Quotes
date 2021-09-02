import React, { useState, useEffect } from "react";
import "../src/Styles/App.css";
import Frase from "./Components/Frase";

function App() {
  const [frase, setFrase] = useState({});
  const [load, setLoad] = useState(false);

  const getPrhase = async () => {
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
      <img
        src="https://i0.wp.com/medioambienteynaturaleza.com/wp-content/uploads/2015/06/Fondos-de-pantalla-de-paisajes-naturales25.jpg?ssl=1"
        alt="fondo de pagina"
        className="fondo"
      />
      <Frase getPrhase={getPrhase} frase={frase} load={load} />
    </div>
  );
}

export default App;
