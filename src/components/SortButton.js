import React from "react";
import { Consumer } from "./NumberContext";
import SelectionSort from "./algorithms/SelectionSort";
import InsertionSort from "./algorithms/InsertionSort";
import BubbleSort from "./algorithms/BubbleSort";
import MergeSort from "./algorithms/MergeSort";

const sort_btn = {
  backgroundColor: "transparent",
  padding: ".5rem",
  border: "0",
  color: "rgba(255,255,255,1)",
};

const SortButton = (e) => {
  const SelectAlgo = (arr, dispatch, size) => {
    let sort_method = document.getElementById("SelectSort").value;

    switch (sort_method) {
      case "sel":
        SelectionSort(arr, dispatch, size);
        break;
      case "ins":
        InsertionSort(arr, dispatch, size);
        break;
      case "bub":
        BubbleSort(arr, dispatch, size);
        break;
      case "mer":
        MergeSort(arr, dispatch, size);
        break;
      default:
        SelectionSort(arr, dispatch, size);
    }
  };
  return (
    <Consumer>
      {(value) => {
        const { arr, dispatch, size } = value;
        return (
          <div className="Sort-Btn">
            <button
              style={sort_btn}
              className="btn btn-secondary btn-medium rounded"
              onClick={() => SelectAlgo(arr, dispatch, size)}
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
