// define algorithm here (you'll need lo and hi for the beginning/endpoints on the recursive call)
function quicksort(arr, lo, hi) {
  if (lo < hi) {
    var pivotIndex = partition(arr, lo, hi);
    quicksort(arr, lo, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, hi);
  }
  return arr;
}

// partition function (selects a pivot, sorts into partitions, and returns the array index of the pivot)
function partition(arr, lo, hi) {
  var pivotValue = arr[hi];
  var left = lo;
  var temp;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivotValue) {
      // arr[left], arr[i] = arr[i], arr[left]
      temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      left++;
    }
  }

  // arr[left], arr[hi] = arr[hi], arr[left]
  temp = arr[left];
  arr[left] = arr[hi];
  arr[hi] = temp;
  return left;
}

// testing quicksort
var a = [4, 92, 1, 39, 19, 93, 49, 10, 99, 103, 13];
quicksort(a, 0, a.length-1)

console.log(a);
