let arr1 = [10, 12, 45, 78];
let arr2 = [-1, 5, 7, 12];

function merge(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let k = 0;
  let sortedArr = [];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      sortedArr[k] = leftArr[i];
      i++;
      k++;
    } else {
      sortedArr[k] = rightArr[j];
      j++;
      k++;
    }
  }

  while (j < rightArr.length) {
    sortedArr[k] = rightArr[j];
    j++;
    k++;
  }

  while (i < leftArr.length) {
    sortedArr[k] = leftArr[i];
    i++;
    k++;
  }

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) return;

  let mid = Math.floor(arr.length / 2);

  let leftArr = []; //p---> mid;

  for (let i = 0; i < mid; i++) {
    leftArr[i] = arr[i];
  }

  let rightArr = []; //mid--->r

  for (let i = mid; i < arr.length; i++) {
    rightArr[i - mid] = arr[i];
  }

  mergeSort(leftArr);
  mergeSort(rightArr);
  return merge(leftArr, rightArr);
}

console.log(mergeSort([10, 16, 7, 5, 19]));
