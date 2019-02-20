export default function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }

  // Let's find out if we can divide the number by two
  // many times without remainder.
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }

    dividedNumber /= 2;
  }

  return true;
}

// 方法二
// return Math.log2(number) % 1 === 0;

// 方法三
// 只要是2的次方幂，必然是最高位为1，其余为0，当num-1时，则最高位是0，其余是1.
// 按位与运算：  1&1=1  0&1=0 0&0=0 1&0=0

// return (number > 0) && !(number & (number - 1))