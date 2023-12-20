/******
 * I->1
 * v->5
 * X->10
 * L->50
 * C->100
 * D->500
 * M->1000
 * ==============
 * I before V and X is 4 and 9
 * X before L & C is 40 & 90
 * C before D & M is 400 & 900
 * ================
 * MCMXCIV = 1000 + 900 + 90 + 4 = 1994
 *
 */

const charToIntMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const subtractionMap = {
  V: "I",
  X: "I",
  L: "X",
  C: "X",
  D: "C",
  M: "C",
};

function romanToInteger(romanString) {
  let result = 0;
  for (let i = 0; i < romanString.length; i++) {
    let current = romanString[i]; // C
    let next = romanString[i + 1]; // M
    // console.log(`current=${current} and next= ${next}`);
    if (current == subtractionMap[next]) {
      //C==C
      // console.log(`current=${current} and sub= ${subtractionMap[next]}`);
      result = result + (charToIntMap[next] - charToIntMap[current]);
      i++; // skip the next character as it is already calculated with current
    } else {
      result = result + charToIntMap[current];
    }
  }

  return result;
}

const intNumber = romanToInteger("III");

console.log(intNumber);
