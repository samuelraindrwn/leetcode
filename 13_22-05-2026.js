/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let base = [
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
  ];

  let result = 0;
  let temp = [];
  s = s.split("");

  for (i = 0; i < s.length; i++) {
    for (j = 0; j < base.length; j++) {
      if (s[i] == base[j][1]) {
        temp.push(base[j][0]);
      }
    }
  }

  for (i = temp.length - 1; i > -1; i--) {
    if (temp[i] > temp[i - 1]) {
      temp[i] -= temp[i - 1];
      temp[i - 1] = 0;
    }

    result += temp[i];
  }

  return result;
};

const roman = "MMXXVI";
console.log("roman:", roman);
console.log("result int:", romanToInt(roman));

// === Improved Version ===
// - Pakai object map untuk lookup O(1)
// - Satu pass tanpa temp array
// - Fix implicit global (let i)
//
// var romanToIntImproved = function (s) {
//   const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   let result = 0;
//
//   for (let i = 0; i < s.length; i++) {
//     const curr = map[s[i]];
//     const next = map[s[i + 1]];
//     if (next > curr) {
//       result -= curr;
//     } else {
//       result += curr;
//     }
//   }
//
//   return result;
// };
