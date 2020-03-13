import React from "react";
// import Bar from "../Bar";
// import uuid from "react-uuid";

// function makeRequest(q, x) {
//   return new Promise(resolve => {
//     if (q === x) resolve();
//     else {
//       console.log("Here");
//     }
//   });
// }

function SelectionSort(arr, dispatch) {
  var min, pos, temp, j, i;
  var brr = [...arr];
  console.log(arr);
  const firstLoop = async () => {
    for (i = 0; i < 200; i++) {
      min = brr[i].num;
      pos = i;
      brr[i].active = 1;
      console.log(i);
      j = i + 1;
      const secondLoop = async () => {
        for (; j < 200; j++) {
          brr[j].active = 3;
          if (brr[j].num < min) {
            if (pos !== i) brr[pos].active = 0;
            min = brr[j].num;
            pos = j;
            brr[j].active = 2;
          }
          if (brr[j - 1].active === 3) brr[j - 1].active = 0;
          dispatch({
            type: "CHANGE_ARR",
            payload: brr
          });
          console.log(`resolved : ${i} ${j}`);
          await new Promise(resolve => setTimeout(resolve, 0));
        }
      };
      secondLoop();
      await new Promise(resolve => setTimeout(resolve, 1000));
      //    console.log(`haere ${j}`);
      //   if (j === 199) resolve();
      // });
      temp = brr[i].num;
      brr[i].num = min;
      brr[pos].num = temp;
      brr[pos].active = 0;
      brr[i].active = 4;
      dispatch({
        type: "CHANGE_ARR",
        payload: brr
      });
      if (brr[199].active === 3) brr[199].active = 0;
    }
    //   console.log(arr);
    //   console.log(brr);
  };
  firstLoop();
}

export default SelectionSort;
