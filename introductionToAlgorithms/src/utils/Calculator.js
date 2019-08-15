export default class Calculator {
  // 2^(n/8) >= n
  cal0() {
    for (let i = 1; i < 1000000; i += 1) {
      if (2 ** (i / 8) >= i) {
        console.log(i);
        return i;
      }
    }
    return 0;
  }

  // 100 * n^2 >= 2^n
  cal1() {
    for (let i = 1; i < 1000000; i += 1) {
      if (100 * (i ** 2) <= 2 ** i) {
        console.log(i);
        return i;
      }
    }
    return 0;
  }

  main() {
    //
  }
}
