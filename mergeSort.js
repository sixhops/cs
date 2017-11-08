
function merge(left_array, right_array) {
  // Base cases
  var smallest_number = 0;
  if (right_array.length === 0) {
    return left_array; // We have nothing to compare. Left wins.
  }
  if (left_array.length === 0) {
    return right_array; // We have nothing to compare. Right wins.
  }
  // Get the lowest value and remove it from the array
  if (left_array[0] <= right_array[0]) {
    smallest_number = left_array.shift();
  } else {
    smallest_number = right_array.shift();
  }
  // We keep doing it until the left or right array is empty.
  merged = merge(left_array, right_array);
  merged.unshift(smallest_number);
  // Okay, either left or right array are empty at this point. So we have a result.
  return merged;
}

function mergeSort(arr) {
  // base case:
  // an array of 1 or fewer elements is, by definition, sorted.
  if (arr.length <= 1) {
    return arr;
  }
  // Get the middle index
  var mid = Math.round(arr.length / 2);
  // Divide the array into left and right sides
  var leftArray = arr.slice(0, mid);
  var rightArray = arr.slice(mid, arr.length);
  // Call mergeSort on each side
  var sortedLeftArray = mergeSort(leftArray);
  var sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}

// Let's give this a spin?
var a = [4, 92, 1, 39, 19, 93, 49, 10, 99, 103, 13, 102, 32, 345, 145, 4590, 111, 56, 167, 2101];
// var a = [42, 13, 20];
console.log( mergeSort(a) ); // => [1, 4, 10, 19, 39, 49, 92, 93]
