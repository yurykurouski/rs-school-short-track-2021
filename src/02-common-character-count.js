/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arrayed = s1.split('').sort();
  const s2Arrayed = s2.split('').sort();
  let counter = 0;

  for (let i = 0; i < s1Arrayed.length; i++) {
    if (s2Arrayed.includes(s1Arrayed[i])) {
      const index = s2Arrayed.indexOf(s1Arrayed[i]);

      s2Arrayed.splice(index, 1);
      counter++;
    }
  }

  return counter;
}

module.exports = getCommonCharacterCount;
