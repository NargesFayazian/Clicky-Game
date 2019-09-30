
import React from "react";
import "./Score.css";

const Score = props => (
    <div>
        <ul className="score">
            <li
                className={props.message.indexOf('already guessed') !== -1 ? 
                    "guess-wrong" : 
                    props.message.indexOf('keep guessing') !== -1 ?
                        "guess-right" :
                        "reg"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.runningScore}</span> | High Score: {props.highScore}</li>
        </ul>
    </div>
);

export default Score;