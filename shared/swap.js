
async function swap (v, a, b){
    /**
     * Function to swap two values in a vector.
     * Take the time choosen in the index.html and applies correctly to the time for each swap
     * 
     * @param v array rectWidth the values to be swapped
     * @param a index of the value 1 that will be swapped
     * @param b index of the value 2 that will be swapped
     */

    changeColor(a, b);
    await sleep(delay);
    let temp = v[a];
    v[a] = v[b];
    v[b] = temp;
    unChangeColor(a, b);
}

function sleep(time) {
    /**
     * Simple function to wait for some time with the setTimeout promise method to execute the function.
     * Used inside the swap function
     * 
     * @param time time in milliseconds to be waited for the operation to continue
     */
    return new Promise(resolve => setTimeout(resolve, time));
}
