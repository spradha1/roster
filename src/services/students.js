// fetch students' data
export async function getStudents() {

  return await fetch('https://api.hatchways.io/assessment/students', {
    method: 'GET',
    mode: 'cors'
  })
  .then(response => response.json())
  .then(data => data.students);
}


// filter students' data by name and tag
export function filterStudents (data, name, tag) {

  let loName = name.trim().toLowerCase();

  if (loName !== "") {
    data = data.filter(student => {
      return student.firstName.toLowerCase().includes(loName) || student.lastName.toLowerCase().includes(loName);
    });
  }

  return data;
}
