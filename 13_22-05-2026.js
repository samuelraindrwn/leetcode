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

  console.log("temp before:", temp);

  for (i = temp.length - 1; i > -1; i--) {
    console.log("putaran ke", i);
    console.log(temp[i], temp[i - 1]);
    if (temp[i] > temp[i - 1]) {
      temp[i] -= temp[i - 1];
      temp[i - 1] = 0;
    }

    result += temp[i];
  }

  console.log("temp after:", temp);

  return result;
};

const roman = "MMCDLVII";
console.log("roman:", roman);
console.log("result int:", romanToInt(roman));
