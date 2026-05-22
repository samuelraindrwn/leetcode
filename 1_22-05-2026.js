/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

// --- Test Cases ---
function assert(label, result, expected) {
  const pass = JSON.stringify(result) === JSON.stringify(expected);
  console.log(`${pass ? "PASS" : "FAIL"} [${label}]`, pass ? "" : `=> got ${JSON.stringify(result)}, expected ${JSON.stringify(expected)}`);
}

assert("basic",          twoSum([2, 7, 11, 15], 9),   [0, 1]);
assert("middle pair",    twoSum([3, 2, 4], 6),         [1, 2]);
assert("duplicate nums", twoSum([3, 3], 6),             [0, 1]);
assert("negative nums",  twoSum([-1, -2, -3, -4], -6), [1, 3]);
assert("larger array",   twoSum([1, 5, 3, 7, 2], 9),   [3, 4]);
