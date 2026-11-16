/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  var slice = function (object, range) {
    let tmp = [];
    for (let i = object.length; i > 0; i--) {
      let group = object.slice(0, range);
      if (group == "") {
        break;
      }
      tmp.push(group);
      object = object.slice(range, s.length);
    }
    return tmp;
  };

  var sum = function (object) {
    let result = [];
    for (let i = 0; i < object.length; i++) {
      let num = object[i].split("");
      let tmp = 0;
      for (let j = 0; j < num.length; j++) {
        tmp = tmp + parseInt(num[j]);
      }
      result.push(tmp.toString());
    }
    return result;
  };

  var toSlicedStr = function (object) {
    let slicedSumStr = "";
    for (let i = 0; i < object.length; i++) {
      slicedSumStr = slicedSumStr + object[i];
    }
    return slicedSumStr;
  };

  let length = s.length;
  while (length > k) {
    s = toSlicedStr(sum(slice(s, k)));
    length = s.length;
  }

  return s;
};
