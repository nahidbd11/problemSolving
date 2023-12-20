/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 * 
 */

function compareSubStr(haystack, needle, i) {
  for (let j = 0; j < needle.length; j++) {
    if (needle.charAt(j) != haystack.charAt(i + j)) {
      return false;
    }
  }

  return true;
}

var strStr = function (haystack, needle) {
  if (haystack == "" || haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) == needle.charAt(0)) {
      let isFoundStr = compareSubStr(haystack, needle, i);

      if (isFoundStr) return i;
    }
  }

  return -1;
};

console.log(strStr("leetcode", "leeto"));
