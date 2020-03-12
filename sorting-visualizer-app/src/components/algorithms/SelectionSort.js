import React from "react";
// import Bar from "../Bar";
// import uuid from "react-uuid";

function SelectionSort(arr, dispatch) {
  var min, pos, temp;
  var brr = [...arr];
  console.log(arr);
  for (let i = 0; i < 200; i++) {
    min = brr[i].num;
    pos = i;
    brr[i].active = 1;
    for (let j = i + 1; j < 200; j++) {
      brr[j].active = 3;
      if (brr[j].num < min) {
        min = brr[j].num;
        pos = j;
        brr[j].active = 2;
      }
    }
    temp = brr[i].num;
    brr[i].num = min;
    brr[pos].num = temp;
    brr[i].active = 4;
    dispatch({
      type: "CHANGE_ARR",
      payload: brr
    });
  }
  //   console.log(arr);
  //   console.log(brr);
}

export default SelectionSort;