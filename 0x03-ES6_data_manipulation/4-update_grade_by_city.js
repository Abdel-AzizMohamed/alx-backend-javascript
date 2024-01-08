/* eslint-disable */
export default function updateStudentGradeByCity(objArray, city, newGrades) {
  if (!Array.isArray(objArray)) return [];

  const objFilter = objArray.filter((ele) => ele.location === city);
  return objFilter.map(function (ele) {
    for (let i = 0; i < newGrades.length; i++)
      if (newGrades[i].studentId === ele.id) {
        ele.grade = newGrades[i].grade;
        return ele;
      }
    ele.grade = 'N/A';
    return ele;
  });
}
