function btPowerSetRecursive(originalSet, allSubSets = [[]], currentSubSet = [], startAt = 0) {
  for (let position = startAt; position < originalSet.length; position += 1) {
    currentSubSet.push(originalSet[position]);

    allSubSets.push([...currentSubSet]);

    btPowerSetRecursive(originalSet, allSubSets, currentSubSet, position + 1);

    currentSubSet.pop();
  }

  return allSubSets;
}

export default function btPowerSet(originalSet) {
  return btPowerSetRecursive(originalSet);
}