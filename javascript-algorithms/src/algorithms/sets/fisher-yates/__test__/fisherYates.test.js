import fisherYates from '../fisherYates';
// import { sortedArr } from '../../../sorting/SortTester';
// import QuickSort from '../../../sorting/quick-sort/QuickSort';

describe('fisherYates', () => {
  it('should shuffle small arrays', () => {
    expect(fisherYates([])).toEqual([]);
    expect(fisherYates([1])).toEqual([1]);
  });

  it('should shuffle array randomly', () => {
    const shuffledArray = fisherYates([1, 2, 3, 4, 5, 6, 7, 8]);
    console.log(shuffledArray);
    // const sorter = new QuickSort();

    // expect(shuffledArray.length).toBe(sortedArr.length);
    // expect(shuffledArray).not.toEqual(sortedArr);
    // expect(sorter.sort(shuffledArray)).toEqual(sortedArr);
  });
});