/**
 * Fast Powering Algorithm.
 * Recursive implementation to compute power.
 *
 * Complexity: log(n)
 *
 * @param {number} base - Number that will be raised to the power.
 * @param {number} power - The power that number will be raised to.
 * @return {number}
 */
export default function fastPowering(base, power) {
  if (power === 0) {
    return 1;
  }

  if (power % 2 === 0) {
    const multiplier = fastPowering(base, power / 2);
    return multiplier * multiplier;
  }

  const multiplier = fastPowering(base, Math.floor(power / 2));
  return multiplier * multiplier * base;
}