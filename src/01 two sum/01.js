/**
 * Finds two numbers in an array that add up to a target sum.
 * @param {number[]} arr - The input array of numbers.
 * @param {number} target - The target sum to be achieved.
 * @returns {number[]|null} - An array containing the indices of the two numbers that
 *                            add up to the target sum, or null if no such pair is found.
 */
function twoSum(arr, target) {
  let seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (seen.has(current)) {
      return [seen.get(current), i];
    } else {
      seen.set(target - current, i);
    }
  }
  return null;
}

module.exports = twoSum;
