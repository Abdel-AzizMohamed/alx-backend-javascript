export default function getStudentsByLocation(objArray, city) {
  if (!Array.isArray(objArray)) return [];

  return objArray.filter((ele) => ele.location === city);
}
