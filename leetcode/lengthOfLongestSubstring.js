/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let ans = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s.charAt(j))) {
      i = Math.max(map.get(s.charAt(j)), i);
    }

    ans = Math.max(ans, j - i + 1);
    map.set(s.charAt(j), j + 1);
  }
  return ans;
};
// var lengthOfLongestSubstring = function(s) {
//   let subString = [];
//   let maxLength = 0;
//   for(let i = 0; i < s.length; i++) {
//       const curChar = s.charAt(i);
//       const prevIndex = subString.indexOf(curChar);
//       if (prevIndex >= 0) {
//           maxLength = Math.max(maxLength, subString.length);
//           subString = subString.splice(prevIndex + 1);
//           subString.push(curChar);
//       } else {
//           subString.push(curChar);
//       }
//   }
//   maxLength = Math.max(maxLength, subString.length);
//   return maxLength;
// };
