import React, { useContext } from "react";
import { NumberContext } from "./NumberContext";

let number_of_bars = 50;

const RandomButton = () => {
  const [arr, newState] = useContext(NumberContext);

  const State = e => {
    let brr = [];
    for (let i = 0; i < number_of_bars; i++) {
      brr.push(randomNumber(5, 400));
    }
    newState(brr);
  };

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function setBars(value) {
    number_of_bars = value;
  }

  return (
    <div className="Random-Btn">
      <button onClick={State}>Generate Random Numbers</button>
      <div className="slidecontainer">
        <input
          type="range"
          min="4"
          max="200"
          className="slider"
          id="myRange"
          onChange={(number_of_bars = this.value)}
        ></input>
      </div>
    </div>
  );
};

export default RandomButton;
