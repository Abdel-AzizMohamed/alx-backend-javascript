export default function cleanSet(set, startString) {
  const strArray = [];
  const strSize = startString.length;

  for (const item of set) {
    if (item.indexOf(startString) !== -1) {
      strArray.push(item.slice(strSize, item.length));
    }
  }

  return strArray.join('-');
}
