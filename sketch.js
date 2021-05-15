/**
 * Global variables
 */
var array = [];
var canvasWidth;
var canvasHeight;
var rectWidth;

function setup() {
    let nRectangles = 50;

    canvasWidth = windowWidth;
    canvasHeight = windowHeight/1.5;
    rectWidth = floor(canvasWidth/nRectangles);

    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener("click", refreshAlgorithm);

    const selectField = document.getElementById('selectAlgorithm');
    selectField.addEventListener("click", refreshAlgorithm);

    const rectanglesRange = document.getElementById('rectanglesRange');
    rectanglesRange.addEventListener('input', () => {
        nRectangles = rectanglesRange.value;
        rectWidth = floor(canvasWidth / nRectangles);
        document.getElementById('rangeValue').innerText = nRectangles;
        refreshAlgorithm();
    });

    generateArray();
    selectSortingAlgorithm();

    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(220);

    for (let i = 0; i < canvasWidth; i++) {
        rect(i*rectWidth, canvasHeight, rectWidth,  -array[i]);
    }
}


