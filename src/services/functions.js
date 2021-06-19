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
  let loTag = tag.trim().toLowerCase();

  data = data.filter(student => {
    return student.firstName.concat(' ', student.lastName).toLowerCase().includes(loName);
  });

  if (loTag.length > 0) {
    data = data.filter(student => {
      for (let t=0; t<student.tags.length; t++) {
        if (student.tags[t].toLowerCase().includes(loTag))
          return true;
      }
      return false;
    });
  }

  return data;
}
