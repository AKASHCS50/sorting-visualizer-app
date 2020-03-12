import React from "react";
import { Consumer } from "./NumberContext";
import SelectionSort from "./algorithms/SelectionSort";

const SortButton = () => {
  const SelectAlgo = (arr, dispatch) => {
    SelectionSort(arr, dispatch);
  };

  return (
    <Consumer>
      {value => {
        const { arr, dispatch } = value;
        return (
          <div className="Sort-Btn">
            <button
              onClick={function() {
                SelectAlgo(arr, dispatch);
              }}
            >
              {" "}
              Sort{" "}
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default SortButton;
