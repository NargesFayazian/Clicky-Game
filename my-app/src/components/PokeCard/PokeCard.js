import React from "react";
import "./PokeCard.css";

const PokeCard = props => (
  <div className="card">
    <div className="img-container">
    <button onClick={() => props.selectPoke(props.name)} 
                className={props.runningScore === 0  ? "style-click" : "style-click" }
            >
                <img alt={props.name} src={props.image} />
            </button>
    </div>
  </div>
);


export default PokeCard;
