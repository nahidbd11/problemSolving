/***
 * Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 * 
 * 
 */

const addBinary = (a, b) => {
  let lenA = a.length - 1;
  let lenB = b.length - 1;
  let carry = 0;
  let result = "";

  while (lenA >= 0 || lenB >= 0) {
    let currA = lenA >= 0 ? +a[lenA--] : 0;
    let currB = lenB >= 0 ? +b[lenB--] : 0;
    const sum = currA + currB + carry;
    carry = sum > 1 ? 1 : 0;
    result += `${sum % 2}`;
  }

  if (carry == 1) result += `1`;

  return result.split("").reverse().join("");
};

let result = addBinary("11", "1");
console.log(result);
