/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num1 = x.toString().split("");
  let num2 = [];

  for (i = num1.length - 1; i > -1; i--) {
    num2.push(num1[i]);
  }

  for (i = 0; i < num1.length; i++) {
    console.log(num1[i], num2[i], num1[i] == num2[i]);
    if (num1[i] != num2[i]) {
      return false;
    }
  }

  return true;
};

console.log("palindrome:", isPalindrome(1221));

// =============================================================
// VERSI IMPROVED (Best Practice)
// =============================================================
// Perbaikan:
// 1. Tangani angka negatif lebih awal (selalu false)
// 2. Pendekatan two-pointer — tidak perlu array tambahan
// 3. Pakai `let` untuk variabel loop (hindari implicit global)
// 4. Pakai strict equality `!==` bukan `!=`
// 5. Hapus console.log untuk debug

// var isPalindrome = function(x) {
//   if (x < 0) return false;
//
//   const s = x.toString();
//   let left = 0, right = s.length - 1;
//
//   while (left < right) {
//     if (s[left] !== s[right]) return false;
//     left++;
//     right--;
//   }
//
//   return true;
// };
