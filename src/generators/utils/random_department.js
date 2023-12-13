import { randomInt } from "../random.js";

function randomDepartment(company) {
  const departments = [];

  function traverse(department) {
    if (!department) {
      return;
    }
    departments.push(department);
    for (const child of department.departments) {
      traverse(child);
    }
  }

  // Traverse the company tree and get all departments as an array
  traverse(company);

  const randomIndex = randomInt(0, departments.length - 1);
  return departments[randomIndex];
}

export default randomDepartment
