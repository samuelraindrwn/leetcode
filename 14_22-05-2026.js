/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0]; // anggap string pertama sebagai prefix awal

  for (let i = 1; i < strs.length; i++) {
    // Potong prefix selama string[i] belum dimulai dengan prefix itu
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1); // buang 1 karakter terakhir
      if (prefix === "") return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["ab", "a"]));
