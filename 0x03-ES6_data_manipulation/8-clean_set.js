/* eslint-disable no-unused-expressions */
export default function cleanSet(set, startString) {
  let str = '';
  if (startString === '') return '';
  set.forEach((element) => {
    if (element.slice(0, startString.length) === startString) str === '' ? str = element.slice(startString.length) : str += `-${element.slice(startString.length)}`;
  });
  return str;
}
