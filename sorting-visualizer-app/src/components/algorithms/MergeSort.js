const MergeSort = (arr, dispatch, size) => {
  var brr = [...arr];
  console.log(arr);
  console.log(size);

  const merge = async (brr, l, h, m) => {
    let n1, n2, i, j, k;
    n1 = m - l + 1;
    n2 = h - m;
    let A = [],
      B = [];

    for (i = l, j = 0; j < n1; i++, j++) A.push(brr[i]);

    for (i = m + 1, j = 0; j < n2; i++, j++) B.push(brr[i]);

    console.log(A);
    console.log(n1);
    console.log(B);
    console.log(n2);

    for (i = 0, j = 0, k = l; i < n1 && j < n2; k++) {
      console.log(`${i}, ${j}, ${k}`);
      if (A[i].num < B[j].num) {
        arr[k].num = A[i].num;
        i++;
      } else {
        arr[k].num = B[j].num;
        j++;
      }
      // dispatch({
      //   type: "CHANGE_ARR",
      //   payload: brr
      // });
      // await new Promise(resolve => setTimeout(resolve, 10));
    }

    while (i < n1) {
      arr[k].num = A[i].num;
      i++;
      k++;
      // dispatch({
      //   type: "CHANGE_ARR",
      //   payload: brr
      // });
      // await new Promise(resolve => setTimeout(resolve, 10));
    }

    while (j < n2) {
      arr[k].num = B[j].num;
      j++;
      k++;
      // dispatch({
      //   type: "CHANGE_ARR",
      //   payload: brr
      // });
      // await new Promise(resolve => setTimeout(resolve, 10));
    }
    console.log("here");
  };

  const Sort = async (brr, l, h) => {
    if (l < h) {
      let m = Math.floor((l + h) / 2);
      console.log(`I ${l}, ${m}`);
      await Sort(brr, l, m);
      console.log(`II ${m + 1}, ${h}`);
      await Sort(brr, m + 1, h);
      console.log(`III ${l}, ${h}, ${m}`);
      await merge(brr, l, h, m);

      // dispatch({
      //   type: "CHANGE_ARR",
      //   payload: brr
      // });
      // await new Promise(resolve => setTimeout(resolve, 10));
    }
    console.log("here");
  };

  Sort(brr, 0, size - 1);
  console.log("COmpleted");
  dispatch({
    type: "CHANGE_ARR",
    payload: brr
  });
  console.log(arr);
  // console.log(brr);
}

export default MergeSort;
