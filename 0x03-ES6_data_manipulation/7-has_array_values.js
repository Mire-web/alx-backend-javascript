export default function hasValuesFromArray(set, array) {
  const arrSet = new Set(array);
  return arrSet.isSubsetOf(set);
}
