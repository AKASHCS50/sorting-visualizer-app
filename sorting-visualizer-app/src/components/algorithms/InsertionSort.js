function InsertionSort(arr, dispatch, size) {
    var brr = [...arr];
    console.log(arr);
    console.log(size);
    const firstLoop = async () => {
        brr[0].active = 4;
        for (let i = 1; i < size; i++) {
            let temp = brr[i].num;
            brr[i].active = 1;
            console.log(i);
            let j = i;
            const secondLoop = async () => {
                // while ((j >= 0) && (brr[j] > temp)) {
                j--;
                if (j >= 0) {
                    console.log(`resolve ${i}  ${j}`);
                    brr[j].active = 3;
                    brr[j + 1].num = brr[j].num;
                    dispatch({
                        type: "CHANGE_ARR",
                        payload: brr
                    });
                    await new Promise(resolve => setTimeout(resolve, 20));
                    brr[j].active = 4;
                    secondLoop();
                }
            }
            await secondLoop();
            brr[j + 1].num = temp;
            brr[i].active = 4;
            dispatch({
                type: "CHANGE_ARR",
                payload: brr
            });
        }
        //   console.log(arr);
        //   console.log(brr);
    };
    firstLoop();
}

export default InsertionSort;