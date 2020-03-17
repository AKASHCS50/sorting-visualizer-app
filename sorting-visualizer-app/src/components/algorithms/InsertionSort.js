function InsertionSort(arr, dispatch, size) {
  var brr = [...arr];
  console.log(arr);
  console.log(size);
  const firstLoop = async () => {
    for (let i = 1; i < size; i++) {
      let temp = brr[i].num;
      let j = i - 1;
      //   console.log(i);
      const secondLoop = async () => {
        for (; j >= 0; j--) {
          brr[j].active = 3;
          if (brr[j].num > temp) {
            brr[j + 1].num = brr[j].num;
            brr[j + 1].active = 2;
          } else {
            brr[j].active = 2;
            break;
          }
          dispatch({
            type: "CHANGE_ARR",
            payload: brr
          });
          //   console.log(`resolved : ${i} ${j}`);
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      };
      await secondLoop();
      brr[j + 1].num = temp;
      brr[j + 1].active = 1;
      dispatch({
        type: "CHANGE_ARR",
        payload: brr
      });
      await new Promise(resolve => setTimeout(resolve, 10));
      brr[j + 1].active = 2;
      dispatch({
        type: "CHANGE_ARR",
        payload: brr
      });
    }
  };
  firstLoop();
}

export default InsertionSort;
