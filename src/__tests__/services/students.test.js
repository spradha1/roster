import { filterStudents, getStudents } from "../../services/students";


describe('getStudents function', () => {

  test('the students data is retrieved from API', async () => {
    const data = await getStudents();
    expect(data).not.toBe(null);
  });

});


describe('filterStudents function tests', () => {
  let data = [];

  beforeEach(() => {
    data = [
      {
        firstName: 'Ross',
        lastName: 'Geller',
        tags: []
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
        tags: []
      },
      {
        firstName: 'Rachel',
        lastName: 'Green',
        tags: []
      }
    ]
  });

  test('data gets filtered correctly for name', () => {
    expect(filterStudents(data, "gel", "")).toStrictEqual([
      {
        firstName: 'Ross',
        lastName: 'Geller',
        tags: []
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
        tags: []
      }
    ]);
  });

  test('data is not filtered for blank query', () => {
    expect(filterStudents(data, "", "" )).toStrictEqual(data);
  });

});
