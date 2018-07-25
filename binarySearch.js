
function binarySearch(arr, val, min=0, max=null) {
  if (max === null) {
    max = arr.length - 1;
  }

  var mid = Math.floor((min + max) / 2);

  if (min <= max) {
    if (val < arr[mid]) {
      return binarySearch(arr, val, min, mid - 1);
    } else if (val > arr[mid]) {
      return binarySearch(arr, val, mid + 1, max);
    } else {
      return mid;
    }
  } else {
    return -1;
  }
}

a = [5, 29, 31, 91, 16, 18, 3, -2, -9, 912, 130, 231, 45, 81];

a = a.sort(function(a, b) {
  return a - b;
});

// b = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100];
console.log(binarySearch(a, 18));
