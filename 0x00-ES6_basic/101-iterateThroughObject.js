export default function iterateThroughObject(reportWithIterator) {
  let nameString = '';
  for (const element of reportWithIterator) {
    if (nameString === '') nameString = element;
    else nameString = `${nameString} | ${element}`;
  }
  return nameString;
}
