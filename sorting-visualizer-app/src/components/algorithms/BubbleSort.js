function BubbleSort(arr, dispatch, size) {
    var brr = [...arr];
    // console.log(arr);
    // console.log(size);
    const firstLoop = async () => {
        for (let i = 0; i < (size - 1); i++) {
            let change = 0;
            // brr[i].active = 1;
            // console.log(i);
            const secondLoop = async () => {
                for (let j = 0; j < (size - i - 1); j++) {
                    // console.log(`resolved : ${i} ${j}`);
                    brr[j].active = 2;
                    brr[j + 1].active = 3;
                    if (brr[j + 1].num < brr[j].num) {
                        let temp = brr[j].num;
                        brr[j].num = brr[j + 1].num;
                        brr[j + 1].num = temp;
                        change = 1;
                    }
                    await new Promise(resolve => setTimeout(resolve, 10));
                    dispatch({
                        type: "CHANGE_ARR",
                        payload: brr
                    });
                    brr[j].active = 0;
                }
            };
            await secondLoop();
            brr[size - i - 1].active = 4;
            if (change === 0)
                break;
            dispatch({
                type: "CHANGE_ARR",
                payload: brr
            });
        }
        for (let i = 0; i < size; i++) 
            brr[i].active = 4;
            dispatch({
                type: "CHANGE_ARR",
                payload: brr
            });
        };
        firstLoop();
    }

    export default BubbleSort;