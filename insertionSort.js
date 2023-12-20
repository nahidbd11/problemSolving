/* console.log("bismillah");

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; //get the element to be sort
    let j = i - 1; // start index to start checking if key is smaller
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}

const sortedArray = insertionSort([5, 4, 8, 7, 1, 6, 3]);

console.log(sortedArray); */

function insertionSort(arr) {
  const array = arr.slice(); // dont mutate original array
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]]; //swap between variable
      }
    }
  }

  return array;
}

const sortedArray = insertionSort([5, 4, 8, 7, 1, 6, 3]);

console.log(sortedArray);
