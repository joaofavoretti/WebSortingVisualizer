async function mergeSort(array, left, right) {
    /**
     * Two lines are essential to be added on the begginning of the algorithm to identify refresh and stop algorithm. 
     * All your function params must be cleared
     */
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener("click", () => { array = []; left = 0; right = 0;});

    if (left >= right) return;

    let mid = floor((left + right) / 2);

    await mergeSort(array, left, mid);
    await mergeSort(array, mid + 1, right)
    console.log(array);
    await merge(array, left, mid, right)
}

async function merge(array, left, mid, right) {
    /**
     * Two lines are essential to be added on the begginning of the algorithm to identify refresh and stop algorithm. 
     * All your function params must be cleared
     */
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener("click", () => { array = []; left = 0; mid = 0; right = 0});

    let L = Array.from(array.slice(left, mid + 1));
    let R = Array.from(array.slice(mid + 1, right + 1));
    console.log('L', L);
    console.log('R', R);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < L.length && j < R.length) {
        if (L[i] < R[j]) {
            changeColor(k, left + i);
            await sleep(delay);
            array[k] = L[i];
            unChangeColor(k, left + i);
            i++;
        } else {
            changeColor(k, mid + 1);
            await sleep(delay);
            array[k] = R[j];
            unChangeColor(k, mid + 1);
            j++;
        }
        k++;
    }

    while (i < L.length) {
        changeColor(k, left + i)
        await sleep(delay)
        array[k] = L[i];
        unChangeColor(k, left + i);
        i++;
        k++;
    }

    while (j < R.length) {
        changeColor(k, mid + 1);
        await sleep(delay)
        array[k] = R[j];
        unChangeColor(k, mid + 1);
        j++;
        k++;
    }
}
