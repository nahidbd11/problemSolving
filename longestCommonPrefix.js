/**
 * find the longestCommonPrefix
 * ------------------------------------
 *
 * ["flower", "car", "flight"] => ""
 * ["flower", "flow", "flight"] => fl
 *
 * **/

function longestCommonPrefix(strs) {
  if (strs == null || strs.length == 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != c)
        return strs[0].substring(0, i);
    }
  }
  return strs[0];
}

const prefix = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(prefix);

/****
 *
 *another way by sorting the array
 *
 */

function longestCommonPrefixBySorting(strs) {
  if (strs == null || strs.length == 0) return "";
  let sortedStrs = strs.sort();
  let prefix = "";
  let first = sortedStrs[0];
  let last = sortedStrs[sortedStrs.length - 1];

  let minLengthStr = Math.min(first.length, last.length);

  for (let i = 0; i < minLengthStr; i++) {
    if (first.charAt(i) != last.charAt(i)) {
      return prefix;
    }
    prefix += first.charAt(i);
  }

  return prefix;
}

console.log(
  longestCommonPrefixBySorting(["flower", "flowerawesome", "flowerly"])
);
