import multiplyByTwo from './multiplyByTwo';
import divideByTwo from './divideByTwo';
import isEven from './isEven';
import isPositive from './isPositive';

/**
 * Multiply two signed numbers using bitwise operations.
 *
 * If a is zero or b is zero or if both a and b are zeros:
 * multiply(a, b) = 0
 *
 * If b is even:
 * multiply(a, b) = multiply(2a, b/2)
 *
 * If b is odd and b is positive:
 * multiply(a, b) = multiply(2a, (b-1)/2) + a
 *
 * If b is odd and b is negative:
 * multiply(a, b) = multiply(2a, (b+1)/2) - a
 *
 * Time complexity: O(log b)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// the run time complexity is O(log(b)
// where b is the operand that reduces to half on each recursive step
export default function multiply(a, b) {
  if (b === 0 || a === 0) {
    return 0;
  }

  // to approach 0
  const multiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  // 11111 to approach 0
  const multiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  // the last one to 1 or -1
  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
  const multiplyByOdd = () => (isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative());

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}