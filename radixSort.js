
// helper function to get the last nth digit of a number
function getDigit(num, nth) {
  // get last nth digit of a number
  //  1234 => 1=4, 2=3, 3=2, 4=1 (right to left)
  var ret = 0;
  while (nth--) {
    ret = num % 10;
    num = Math.floor((num - ret) / 10);
  }
  return ret;
}

// radixSort - LSD version
function radixSort(list) {
  // This counts the digits in each number in the list and returns the highest
  //  count minus 1.
  var max = Math.floor(Math.log10(Math.max.apply(Math,list)));
  var digitBuckets = [];
  var idx = 0;

  for (var i = 0; i < max + 1; i++) {
    // Digit buckets start empty each time
    digitBuckets = [];
    // Loop through the whole list of numbers
    for (var j = 0; j < list.length; j++) {
      // Get the digit at i + 1
      var digit = getDigit(list[j], i+1);
      // We will be putting the list numbers into arrays inside each
      //  digit bucket. This line initializes the bucket to an empty
      //  array if there's nothing in it yet.
      digitBuckets[digit] = digitBuckets[digit] || [];
      // Push the list number into that bucket
      digitBuckets[digit].push(list[j]);
    }

    // rebuild the list according to this digit
    idx = 0;
    // Loop through the whole digitBucket array or arrays
    for (var t = 0; t < digitBuckets.length; t++) {
      // Check to make sure something is in this bucket
      if (digitBuckets[t] && digitBuckets[t].length > 0) {
        // If so, loop through it and store the ordered numbers back in the list
        for (j = 0; j < digitBuckets[t].length; j++) {
          list[idx++] = digitBuckets[t][j];
        }
      }
    }
  }
  return list;
}


var list = [34, 21, 56, 123, 335, 431, 1234, 1, 13, 98, 54321];

console.log(radixSort(list));
