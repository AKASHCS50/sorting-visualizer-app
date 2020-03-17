import React from "react";
import { Consumer } from "./NumberContext";
import SelectionSort from "./algorithms/SelectionSort";
import InsertionSort from "./algorithms/InsertionSort";
import BubbleSort from "./algorithms/BubbleSort";

const SortButton = () => {
  const SelectAlgo = (arr, dispatch, size) => {
    // SelectionSort(arr, dispatch, size);
    // InsertionSort(arr, dispatch, size);
    BubbleSort(arr, dispatch, size);
  };

  return (
    <Consumer>
      {value => {
        const { arr, dispatch, size } = value;
        return (
          <div className="Sort-Btn">
            <button
              onClick={function() {
                SelectAlgo(arr, dispatch, size);
              }}
            >
              Sort
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default SortButton;
