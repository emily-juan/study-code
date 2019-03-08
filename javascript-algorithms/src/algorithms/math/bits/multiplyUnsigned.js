/**
 * Multiply to unsigned numbers using bitwise operator.
 *
 * The main idea of bitwise multiplication is that every number may be split
 * to the sum of powers of two:
 *
 * I.e. 19 = 2^4 + 2^1 + 2^0
 *
 * Then multiplying number x by 19 is equivalent of:
 *
 * x * 19 = x * 2^4 + x * 2^1 + x * 2^0
 *
 * Now we need to remember that (x * 2^4) is equivalent of shifting x left by 4 bits (x << 4).
 *
 * @param {number} number1
 * @param {number} number2
 * @return {number}
 */
export default function multiplyUnsigned(number1, number2) {
  let result = 0;

  let multiplier = number2;

  let bitIndex = 0;

  while (multiplier !== 0) {
    // isOdd
    if (multiplier & 1) {
      result += (number1 << bitIndex);
    }

    bitIndex += 1;
    multiplier >>= 1;
  }

  return result;
}