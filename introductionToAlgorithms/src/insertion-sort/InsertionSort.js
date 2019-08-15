/* eslint-disable no-param-reassign */
export default class InsertionSort {
  sort(originalArray, aesc = true) {
    if (originalArray.length <= 1) {
      return originalArray;
    }

    for (let j = 1; j < originalArray.length; j += 1) {
      const key = originalArray[j];
      let i = j - 1;
      while (i >= 0 && aesc ? originalArray[i] > key : originalArray[i] < key) {
        originalArray[i + 1] = originalArray[i];
        i -= 1;
      }
      originalArray[i + 1] = key;
    }

    return originalArray;
  }
}