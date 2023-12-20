/**
 * sum([1,4])=>1+2+3+4=10;
 * sum([4,1])=>10
 *
 *
 */

function sumInRange(arr) {
  let start = arr[0];
  let end = arr[1];
  let sum = 0;
  if (start > end) {
    //swap
    [start, end] = [end, start];
  }

  for (let i = start; i <= end; i++) sum += i;

  return sum;
}

console.log(sumInRange([1, 4]));
