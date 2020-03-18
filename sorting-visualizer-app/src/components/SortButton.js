import React from "react";
import { Consumer } from "./NumberContext";
import SelectionSort from "./algorithms/SelectionSort";
import InsertionSort from "./algorithms/InsertionSort";
import BubbleSort from "./algorithms/BubbleSort";
import MergeSort from "./algorithms/MergeSort";

const SortButton = e => {
  const SelectAlgo = (arr, dispatch, size) => {
    console.log(arr);
    // SelectionSort(arr, dispatch, size);
    // InsertionSort(arr, dispatch, size);
    // BubbleSort(arr, dispatch, size);
    MergeSort(arr, dispatch, size);
  };
  return (
    <Consumer>
      {value => {
        const { arr, dispatch, size } = value;
        console.log(value);
        console.log(arr);
        console.log("hree");
        return (
          <div className="Sort-Btn">
            <button onClick={() => SelectAlgo(arr, dispatch, size)}>
              Sort
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default SortButton;
