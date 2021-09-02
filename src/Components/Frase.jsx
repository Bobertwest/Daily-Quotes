import React from "react";
import { BiRefresh } from "react-icons/bi";
import Spinner from "./Spinner";
import "../Styles/frase.css";

const Frase = (props) => {
  const { getPrhase, frase, load } = props;
  return (
    <div className="fraseContainer">
      <div className="texto">
        <span>❝</span>
        {load ? (
          <div className="frase">
            <Spinner />
          </div>
        ) : (
          <h4 className="frase">{frase.text}</h4>
        )}
      </div>
      {load ? (
        <div className="autor">
          <Spinner />
        </div>
      ) : (
        frase.author !== null && <p className="autor"> -{frase.author}</p>
      )}
      <button
        className="refresh"
        title="Get another phrase"
        onClick={getPrhase}>
        <BiRefresh className="refreshicon" />
      </button>
    </div>
  );
};

export default Frase;
