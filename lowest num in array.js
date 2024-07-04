function lowest(arr) {
    let i;

    // Initialize maximum element
    let min = arr[0];

    // Traverse array elements
    // from second and compare
    // every element with current max
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }

    return min;
}

// Driver code
let arr = [4,6,2,99];
console.log("Lowest in given array is " + lowest(arr));