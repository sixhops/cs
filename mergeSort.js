
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
  if (arr.length <= 1) {
    return arr;
  }

  var array_size = arr.length;
  var half_of_size = Math.round(array_size / 2);

  var left_array = arr.slice(0, half_of_size);
  var right_array = arr.slice(half_of_size, arr.length);

  var sorted_left_array = mergeSort(left_array);
  var sorted_right_array = mergeSort(right_array);

  return merge(sorted_left_array, sorted_right_array);
}

// Let's give this a spin?
var a = [4, 92, 1, 39, 19, 93, 49, 10, 99, 103, 13];
// var a = [42, 13, 20];
console.log( mergeSort(a) ); // => [1, 4, 10, 19, 39, 49, 92, 93]
