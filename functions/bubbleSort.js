
async function bubbleSort(v) {
    /**
     * Function must be asynchronous because swap must be waited.
     * Algorithm example to perform the Sorting of the array of integers.
     * 
     * @param v array of integers that will be performed the algorithm
     */
    const vlength = v.length;

    for (let i = 0; i < vlength; i++) {
        for (let j = 0; j < vlength - i - 1; j++) {
            if (v[j] > v[j+1]) {
                await swap (v, j, j+1);
            }
        }
    }
}
