import generateName from './generators/name_generator.js';
import { departmentIterator } from './generators/departments_generator.js';


const iterator = departmentIterator();


// The greater the depth of the department (more close to the base), the more employees.
function numberOfEmployees(departmentDepth) {
  const MAX_EMPLOYEES = 12
  const LEVEL_MULTIPLIER = 2

  const maxEmployees = Math.min(MAX_EMPLOYEES, departmentDepth * LEVEL_MULTIPLIER)
  const numberOfEmployees = Math.floor(Math.random() * maxEmployees);

  return numberOfEmployees;
}

function generateEmployees(departmentDepth, isLastLevel) {
  const minEmployees = isLastLevel ? 1 : 0 // The last element has at least one employee
  const employeesCount = Math.max(minEmployees, numberOfEmployees(departmentDepth))

  const employees = []
  for(let i=0; i<employeesCount; i++) {
    employees.push(generateName())
  }

  return employees
}

function generateDepartment(name, departmentDepth, maxDepth) {
  if (departmentDepth > maxDepth) return null; // Nothing here

  let subDepartments = []

  if (departmentDepth < maxDepth) {} // Generate sub levels

  const employees = generateEmployees(departmentDepth, departmentDepth === maxDepth)
  // Generate employees
  // The last element has at least one employee

  // Data of this department
  const department = {
    foo: iterator.next().value,
    employees: employees,
    departments: subDepartments,
  };


}

for(let level=0; level<=5; level++)
  // console.log(level, numberOfEmployees(level))
  console.log(level, generateEmployees(level, level === 5))

/*

- Pick the level

- If this is not the level
  - Generate n names
  - Generate m departments
  - If should be here, pick the department where the level should be
  - Call for each department
- Generate the

*/
