export default function cleanSet(set, startString) {
  let str = '';
  for (const value of set) {
    const cutStr = value.slice(0, startString.length);
    if (cutStr === startString && startString !== '') {
      if (str === '') str = value.slice(startString.length);
      else str += `-${value.slice(startString.length)}`;
    }
  }
  return str;
}
