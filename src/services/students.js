// fetch students' data
export async function getStudents() {
  return await fetch('https://api.hatchways.io/assessment/students', {
    method: 'GET',
    mode: 'cors'
  })
  .then(response => response.json())
  .then(data => data.students);
}