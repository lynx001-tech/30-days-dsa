function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    
    for (let i = 0; i < len; i++) {
        swapped = false;
        
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }
    
    return arr;
}

console.log(bubbleSort([5, 2, 9, 1]));