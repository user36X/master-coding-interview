const twoSum = require('./01');

describe('find two sum', () => {
  test('finds two numbers that add up to target sum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('returns null if no numbers add up to target sum', () => {
    expect(twoSum([2, 7, 11, 15], 100)).toBe(null);
  });

  test('returns mull if input array is empty', () => {
    expect(twoSum([], 100)).toBe(null);
  });

  test('returns correct indexes for unsorted array', () => {
    expect(twoSum([15, 2, 7, 11], 9)).toEqual([1, 2]);
  });

  test('returns correct indexes for target sum of 2147483647', () => {
    expect(twoSum([-2147483648, 2147483647, 0, 5], 2147483647)).toEqual([1, 2]);
  });
});
