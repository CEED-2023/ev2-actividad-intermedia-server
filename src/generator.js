import { setSeed, random } from './generators/random.js';
import generateName from './generators/name_generator.js';
import { departmentIterator } from './generators/departments_generator.js';

//setSeed(1234)

const iterator = departmentIterator();


// The greater the depth of the department (more close to the base), the more employees.
function numberOfEmployees(departmentDepth) {
  const MAX_EMPLOYEES = 12
  const LEVEL_MULTIPLIER = 2

  const maxEmployees = Math.min(MAX_EMPLOYEES, departmentDepth * LEVEL_MULTIPLIER)
  return Math.floor(random() * maxEmployees);
}

function generateEmployees(departmentDepth, isLastLevel) {
  const minEmployees = isLastLevel ? 1 : 0 // The last element has at least one employee
  const employeesCount = Math.max(minEmployees, numberOfEmployees(departmentDepth))

  const employees = []
  for(let i=0; i<employeesCount; i++)
    employees.push(generateName())

  return employees
}

const MAX_LEVELS = 6

// The greater the depth of the department (more close to the base), the less employees.
function numberOfDepartments(departmentDepth) {
  if(departmentDepth >= MAX_LEVELS ) return 0

  const MAX_DEPARTMENTS = 12
  const LEVEL_MULTIPLIER = 2

  const maxDepartments = Math.min(MAX_DEPARTMENTS, (MAX_LEVELS - departmentDepth) * LEVEL_MULTIPLIER)
  return Math.floor(random() * maxDepartments);
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

for(let level=0; level<=6; level++)
  // console.log(level, generateEmployees(level, level === 5))
  console.log(level, numberOfDepartments(level))


// for(let i=0; i<10; i++)
//   console.log(random())

/*

- Pick the level

- If this is not the level
  - Generate n names
  - Generate m departments
  - If should be here, pick the department where the level should be
  - Call for each department
- Generate the

*/
