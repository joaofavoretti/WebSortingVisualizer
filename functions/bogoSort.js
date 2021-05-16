async function bogoSort(array) {
    /**
     * Two lines are essential to be added on the begginning of the algorithm to identify refresh and stop algorithm. 
     * All your function params must be cleared
     */
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener("click", () => array = []);

    while (!isSorted(array)) {
        let i = getRandomInt(0, array.length);
        let j = getRandomInt(0, array.length);
        console.log(i, j);
        await swap(array, i, j);
    }
}

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return 0;
        }
    }
    return 1;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}