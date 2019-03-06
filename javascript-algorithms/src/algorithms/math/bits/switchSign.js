// why add 1; to defferent +0 and -0;
//   3  0011              0011 3
// + -3 1101              1101 13
// =   10000 = 0; 进位忽略 10000 = 16
export default function switchSign(number) {
  return ~number + 1;
}