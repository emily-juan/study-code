import countSetBits from './countSetBits';

export default function bitsDiff(numberA, numberB) {
  return countSetBits(numberA ^ numberB);
}