/****
 * find valid parentheses
 * ===========================
 * [(){}] => valid
 * (){}=>valid
 * [)=> invalid
 *================
 stack dsa  implementation
 *
 */

const revBrackets = {
  "(": ")",
  "{": "}",
  "[": "]",
  "}": "{",
  ")": "(",
  "]": "[",
};

const leftBrackets = ["(", "{", "["];

function getReverseBracket(bracket) {
  return revBrackets[bracket];
}

function isLeftBracket(bracket) {
  return leftBrackets.includes(bracket);
}

const isValid = function (s) {
  let stack = [];
  for (const bracket of s) {
    let rev = getReverseBracket(bracket);
    if (isLeftBracket(bracket)) {
      stack.push(bracket);
    } else if (stack.length == 0 || stack.pop() != rev) return false;
  }

  return stack.length == 0;
};

console.log(isValid("[()]"));
