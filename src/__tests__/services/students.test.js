import { getStudents } from "../../services/students";

test('the students data is retrieved from API', async () => {
  const data = await getStudents();
  expect(data).not.toBe(null);
});