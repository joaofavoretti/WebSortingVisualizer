async function bogoSort(array) {
    while(!isSorted(array)) {
        let i = floor(random(0, array.length));
        let j = floor(random(0, array.length));
        await swap(array, i, j);
    }
}

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) {
            return 0;
        }
    }

    return 1;
}