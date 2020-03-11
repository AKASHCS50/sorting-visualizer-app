import React, { useContext } from "react";
import { NumberContext } from "./NumberContext";

const SortButton = () => {
  const [arr, newState] = useContext(NumberContext);

  return (
    <div className="Sort-Btn">
      <li> Sort </li>
    </div>
  );
};

export default SortButton;
