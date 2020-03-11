import React, { useContext } from "react";
import { NumberContext } from "./NumberContext";
import SelectionSort from "./algorithms/SelectionSort";

const SortButton = () => {
  const [arr, newState] = useContext(NumberContext);

  const selectSort = () => {
    SelectionSort(arr, newState);
  };

  return (
    <div className="Sort-Btn">
      <button onClick={selectSort}> Sort </button>
    </div>
  );
};

export default SortButton;
