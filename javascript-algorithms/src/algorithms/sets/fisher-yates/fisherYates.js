export default function fisherYates(originArray) {
  const array = originArray.slice(0);
  for (let i = 0; i < array.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}