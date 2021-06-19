import { filterStudents, getStudents } from "../../services/functions";


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
        tags: ['professor', 'genius', 'unagi']
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
        tags: []
      },
      {
        firstName: 'Joey',
        lastName: 'Tribbiani',
        tags: ['actor', 'funny']
      },
      {
        firstName: 'Chandler',
        lastName: 'Bing',
        tags: ['sarcastic', 'funny']
      }
    ]
  });

  test('data gets filtered correctly for name', () => {
    expect(filterStudents(data, "gel", "")).toStrictEqual([
      {
        firstName: 'Ross',
        lastName: 'Geller',
        tags: ['professor', 'genius', 'unagi']
      },
      {
        firstName: 'Monica',
        lastName: 'Geller',
        tags: []
      }
    ]);
  });

  test('data gets filtered correctly for tag', () => {
    expect(filterStudents(data, "", "fun")).toStrictEqual([
      {
        firstName: 'Joey',
        lastName: 'Tribbiani',
        tags: ['actor', 'funny']
      },
      {
        firstName: 'Chandler',
        lastName: 'Bing',
        tags: ['sarcastic', 'funny']
      }
    ]);
  });

  test('data gets filtered correctly for name and tag', () => {
    expect(filterStudents(data, "Joey Tribbiani", "fun")).toStrictEqual([
      {
        firstName: 'Joey',
        lastName: 'Tribbiani',
        tags: ['actor', 'funny']
      }
    ]);
  });

  test('data is not filtered for blank query', () => {
    expect(filterStudents(data, "", "" )).toStrictEqual(data);
  });

});
