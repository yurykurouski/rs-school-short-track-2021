/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    const temp = n.toString().split('');
    temp.splice(i, 1);

    const spliced = parseInt(temp.join(''), 10);

    if (num < spliced) {
      num = spliced;
    }
  }

  return num;
}

module.exports = deleteDigit;
