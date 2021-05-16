/**
 * Event listeners for the buttons inside index.html page
 */
function addEventListeners() {
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener("click", refreshAlgorithm);

    const rectanglesRange = document.getElementById('rectanglesRange');
    rectanglesRange.addEventListener('input', () => {
        nRectangles = rectanglesRange.value;
        document.getElementById('rangeValue').innerText = nRectangles;
    });

    const delayRange = document.getElementById('delayRange');
    delayRange.addEventListener('input', () => {
        delay = delayRange.value;
        document.getElementById('delayValue').innerText = delay;
    });
}

