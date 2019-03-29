export default function combineWithRepetitions(
  combinationOptions,
  combinationLength,
) {
  if (combinationLength === 1) {
    return combinationOptions.map(combination => [combination]);
  }

  const combinations = [];

  combinationOptions.forEach((currentOptions, optionIndex) => {
    const smallerCombinations = combineWithRepetitions(
      combinationOptions.slice(optionIndex),
      combinationLength - 1,
    );
    smallerCombinations.forEach((smallerCombination) => {
      combinations.push([currentOptions].concat(smallerCombination));
    });
  });

  return combinations;
}