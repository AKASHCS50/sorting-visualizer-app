import React, { useContext } from "react";
import { NumberContext } from "./NumberContext";

let number_of_bars = 200;

const RandomButton = () => {
  const [arr, newState] = useContext(NumberContext);

  const State = e => {
    let brr = [];
    for (let i = 0; i < number_of_bars; i++) {
      brr.push({ num: randomNumber(5, 400), active: 0 });
    }
    // console.log(brr);
    newState(brr);
  };

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="Random-Btn">
      <button onClick={State}> New </button>
    </div>
  );
};

export default RandomButton;
