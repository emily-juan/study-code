/*
 * Let circleRadius is the radius of circle.
 * circleRadius is also the side length of the inscribed hexagon
 */
const circleRadius = 1;

/**
 * @param {number} sideLength
 * @param {number} splitCounter
 * @return {number}
 */
function getNGonSideLength(sideLength, splitCounter) {
  if (splitCounter <= 0) {
    return sideLength;
  }

  const halfSide = sideLength / 2;
  const perpendicular = Math.sqrt((circleRadius ** 2) - (halfSide ** 2));
  const excessRadius = circleRadius - perpendicular;
  const splitSideLength = Math.sqrt((excessRadius ** 2) + (halfSide ** 2));

  return getNGonSideLength(splitSideLength, splitCounter - 1);
}

function getNGonSideCount(splitCount) {
  // Liu Hui began with an inscribed hexagon (6-gon).
  const hexagonSideCount = 6;

  // On every split iteration we make N-gons: 6-gon, 12-gon, 24-gon, 48-gon and so on.
  return hexagonSideCount * (splitCount ? 2 ** splitCount : 1);
}

/**
 * Calculate the π value using Liu Hui's π algorithm
 *
 * @param {number} splitCount - number of times we're going to split 6-gon.
 *  On each split we will receive 12-gon, 24-gon and so on.
 * @return {number}
 */
export default function liuHui(splitCount = 1) {
  const nGonSideLength = getNGonSideLength(circleRadius, splitCount - 1);
  const nGonSideCount = getNGonSideCount(splitCount - 1);
  const nGonPerimeter = nGonSideLength * nGonSideCount;
  const approximateCircleArea = (nGonPerimeter / 2) * circleRadius;

  return approximateCircleArea / (circleRadius ** 2);
}