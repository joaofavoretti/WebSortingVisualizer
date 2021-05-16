
async function quickSort(arr, start, end) {
    /**
     * Two lines are essential to be added on the begginning of the algorithm to identify refresh and stop algorithm. 
     * All your function params must be cleared
     */
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener("click", () => { arr = []; start = 0; end = 0; });

    if (start >= end) {
        return;
    }

    let index = await partition(arr, start, end);

    // await Promise.all([
    await quickSort(arr, start, index - 1),
    await quickSort(arr, index + 1, end)
    // ]);
}

async function partition(arr, start, end) {
    /**
     * Two lines are essential to be added on the begginning of the algorithm to identify refresh and stop algorithm. 
     * All your function params must be cleared
     */
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener("click", () => { arr = []; start = 0; end = 0 });
    

    let pivotValue = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }

    await swap(arr, pivotIndex, end);

    return pivotIndex;
}
