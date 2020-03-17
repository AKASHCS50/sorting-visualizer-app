function MergeSort(arr, dispatch, size) {
  var brr = [...arr];
  console.log(arr);
  console.log(size);

  const merge = async(brr, l, h, m) => {
    let n1, n2, i, j, k;
    n1 = m - l + 1;
    n2 = h - l;
    let A = [],
      B = [];

    for (i = l, j = 0; j < n1; i++, j++) A.push(brr[i]);

    for (i = m + 1, j = 0; j < n2; i++, j++) B.push(brr[i]);

    console.log(A);
    console.log(B);

    for (i = 0, j = 0, k = l; i < n1 && j < n2; k++) {
      console.log(`${i}, ${j}, ${k}`);
      if (A[i].num < B[j].num) {
        arr[k].num = A[i].num;
        i++;
      } else {
        arr[k].num = B[j].num;
        j++;
      }
    }

    while (i < n1) {
      arr[k].num = A[i].num;
      i++;
      k++;
    }

    while (j < n2) {
      arr[k].num = B[j].num;
      j++;
      k++;
    }
  };

  const Sort = async(brr, l, h) => {
    if (l < h) {
      let m = Math.floor((l + h) / 2);
      console.log(`I ${l}, ${m}`);
      await Sort(brr, l, m);
      console.log(`II ${m+1}, ${h}`);
      await Sort(brr, m + 1, h);
      console.log(`III ${l}, ${h}, ${m}`);
      await merge(brr, l, h, m);
    }
  };

  Sort(brr, 0, size - 1);
}

export default MergeSort;
