import React, { useContext } from "react";
import { NumberContext } from "./NumberContext";
import uuid from "react-uuid";
import Bar from "./Bar";

function NumberBars(active = 0) {
  const [arr, newState] = useContext(NumberContext);
  return (
    <div className="Arraybox">
      {arr.map(num => (
        <Bar key={uuid()} num={num} active={active} />
      ))}
    </div>
  );
}

export default NumberBars;
