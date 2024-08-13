/* eslint-disable no-unused-expressions */
export default function cleanSet(set, startString) {
  let str = '';
  set.forEach((element) => {
    if (element.slice(0, startString.length) === startString && startString !== '') str === '' ? str = element.slice(startString.length) : str += `-${element.slice(startString.length)}`;
  });
  return str;
}
