function largest(arr) {
    let i;

    // Initialize maximum element
    let max = arr[0];

    // Traverse array elements
    // from second and compare
    // every element with current max
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}

// Driver code
let arr = [45,67,99,108];
console.log("Largest in given array is " + largest(arr));
