export default function setFromArray(arr) {
  const alxSet = new Set();
  for (const elem of arr) alxSet.add(elem);
  return alxSet;
}
