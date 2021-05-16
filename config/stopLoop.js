function stopLoop() {
    const pauseImg = document.getElementById('pauseImg');
    if (algorithmPaused) {
        array = Array.from(savedArray);
        selectSortingAlgorithm();
        algorithmPaused = false;
        pauseImg.src="assets/pause_black.svg";
        loop();
        return;
    }

    savedArray = Array.from(array);
    algorithmPaused = true;
    pauseImg.src="assets/play_arrow_black.svg";
    noLoop();
}
