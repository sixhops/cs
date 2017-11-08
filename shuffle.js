
function shuffle(arr) {
  var rand = 0;
  var temp = null;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * arr.length);
    temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;
  }
  return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(shuffle(arr));
