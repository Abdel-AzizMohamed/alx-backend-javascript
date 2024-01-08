export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) return [];

  return objArray.map((ele) => ele.id);
}
