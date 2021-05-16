/**
 * Global variables
 */
var array = [];
var rectangleColors = [];
var canvasWidth;
var canvasHeight;
var rectWidth;
var delay = 100;
var nRectangles = 100;

function setup() {
    canvasWidth = windowWidth;
    canvasHeight = windowHeight/1.5;
    rectWidth = floor(canvasWidth/nRectangles);

    addEventListeners();
    refreshAlgorithm();

    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(220);

    for (let i = 0; i < canvasWidth; i++) {

        if (rectangleColors[i] === 1) fill(color(0, 255, 0));
        
        rect(i*rectWidth, canvasHeight, rectWidth,  -array[i]);
        
        fill(color(255));
    }
}


