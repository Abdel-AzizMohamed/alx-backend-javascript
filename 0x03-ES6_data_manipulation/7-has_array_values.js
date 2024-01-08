export default function hasValuesFromArray(set, array) {
  return array.filter((ele) => !set.has(ele)).length === 0;
}
