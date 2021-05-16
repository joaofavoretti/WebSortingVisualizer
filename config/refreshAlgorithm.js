
function refreshAlgorithm() {
    /**
     * Function to create a new array and start again the sorting algorithm
     * Used when the refresh button is pressed
     */
    array = [];
    rectWidth = floor(canvasWidth / nRectangles);
    generateArray();
    selectSortingAlgorithm();
}

function generateArray() {
    /**
     * Function to create a new array of integers to be sorted
     */
    for (let i = 0; i < floor(canvasWidth/rectWidth); i++) {
        array.push(floor(random(0, canvasHeight)));
    }
    rectangleColors = array.map(() => -1);
}

