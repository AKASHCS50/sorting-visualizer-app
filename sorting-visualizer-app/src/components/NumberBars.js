import React, { useContext } from "react";
import { NumberContext } from "./NumberContext";
import uuid from "react-uuid";
import Bar from "./Bar";

function NumberBars() {
  const [arr, newState] = useContext(NumberContext);
  // console.log(arr);
  return (
    <div className="Arraybox">
      {arr.map(numb => (
        <Bar key={uuid()} num={numb.num} active={numb.active} />
      ))}
    </div>
  );
}

export default NumberBars;
