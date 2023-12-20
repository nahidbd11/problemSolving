/**
 * 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
 * 
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 0) return;
  if (x == 0) return 0;
  if (x <= 3) return 1;
  let low = 1;
  let high = x;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midSqr = mid * mid;
    if (midSqr == x) return mid;
    else if (midSqr > x) high = mid - 1;
    else if (midSqr < x) low = mid + 1;
  }

  return low * low > x ? low - 1 : low;
};

const result = mySqrt(3);
console.log(result);
