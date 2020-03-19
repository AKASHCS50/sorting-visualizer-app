const MergeSort = (arr, dispatch, size) => {
  var brr = [...arr];
  console.log(arr);
  console.log(size);

  const merge = async (brr, l, h, m) => {
    let n1, n2, i, j, k;
    n1 = m - l + 1;
    n2 = h - m;
    let A = [];
    let B = [];

    for (i = l, j = 0; j < n1; i++, j++) A.push(brr[i]);

    for (i = m + 1, j = 0; j < n2; i++, j++) B.push(brr[i]);

    console.log(A);
    console.log(n1);
    console.log(B);
    console.log(n2);

    for (i = 0, j = 0, k = l; i < n1 && j < n2; k++) {
      console.log(`${i}, ${j}, ${k}`);
      if (A[i].num < B[j].num) {
        brr[k].num = A[i].num;
        i++;
      } else {
        // brr[k].num = B[j].num;
        j++;
      }
    }

    // for (; i < n1; i++, k++) brr[k].num = A[i].num;

    // for (; j < n2; j++, k++) brr[k].num = B[j].num;

    console.log("here");
  };

  const Sort = async (brr, l, h) => {
    if (l < h) {
      let m = Math.floor((l + h) / 2);
      console.log(`I ${l}, ${m}`);
      console.log(`II ${m + 1}, ${h}`);
      await Sort(brr, l, m);
      await Sort(brr, m + 1, h);
      console.log(`III ${l}, ${h}, ${m}`);
      await merge(brr, l, h, m);
    }
    console.log("here");
  };

  Sort(brr, 0, size - 1);
  console.log("Completed");
};

export default MergeSort;
