
function selectSortingAlgorithm() {
    /**
     * Function to select the algorithm to be used based on what was choosen in the select box.
     * The values of the switch case must be the same as the values added in the select box inside index.html
     */
    let selectField = document.getElementById('selectAlgorithm');
    let algorithmChoosen = selectField.value;

    switch(algorithmChoosen) {
        /**
         * Example:
         *  bubbleSort was defined as the default value for the index.html select input
         *  Use the bubbleSort algorithm on the global array variable when this field is selected.
         */
        case 'bubbleSort':
            bubbleSort(array);
            break;
        
        case 'quickSort':
            quickSort(array, 0, array.length - 1);
            break;
        
        default:
    }

}
