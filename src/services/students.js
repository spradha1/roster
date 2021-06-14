// fetch students' data
export function getStudents() {
  return fetch('https://api.hatchways.io/assessment/students', {
    method: 'GET',
    mode: 'cors'
  })
  .then(response => response.json())
  .then(data => data.students);  
}