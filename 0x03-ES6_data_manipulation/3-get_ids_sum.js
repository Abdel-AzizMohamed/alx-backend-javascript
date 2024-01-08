export default function getStudentIdsSum(objArray) {
  if (!Array.isArray(objArray)) return [];

  return objArray.reduce((acc, cur) => acc + cur.id, 0);
}
