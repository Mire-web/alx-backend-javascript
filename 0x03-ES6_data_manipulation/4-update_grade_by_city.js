/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filteredList = arr.filter((student) => student.location === city);
  return filteredList.map((student) => {
    student.grade = 'N/A';
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
    return student;
  });
}
