function SelectionSort(arr, dispatch, size) {
  var brr = [...arr];
  // console.log(arr);
  // console.log(size);
  const firstLoop = async () => {
    for (let i = 0; i < size; i++) {
      let min = brr[i].num;
      let pos = i;
      brr[i].active = 1;
      // console.log(i);
      let j = i + 1;
      const secondLoop = async () => {
        for (; j < size; j++) {
          brr[j].active = 3;
          if (brr[j].num < min) {
            if (pos !== i) brr[pos].active = 0;
            min = brr[j].num;
            pos = j;
            brr[j].active = 4;
          }
          if (brr[j - 1].active === 3) brr[j - 1].active = 0;
          dispatch({
            type: "CHANGE_ARR",
            payload: brr
          });
          // console.log(`resolved : ${i} ${j}`);
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      };
      await secondLoop();
      let temp = brr[i].num;
      brr[i].num = min;
      brr[pos].num = temp;
      brr[pos].active = 0;
      brr[i].active = 2;
      dispatch({
        type: "CHANGE_ARR",
        payload: brr
      });
      if (brr[size - 1].active === 3) brr[size - 1].active = 0;
    }
  };
  firstLoop();
}

export default SelectionSort;
