import { setSeed, random } from './generators/random.js';
import { generateCompanyName } from './generators/company_generator.js';
import generateName from './generators/name_generator.js';
import { generateRandomID, createDepartmentIterator } from './generators/departments_generator.js';

//setSeed(1234)

const departmentIterator = createDepartmentIterator();


function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(random() * (max - min + 1)) + min;
}


// The greater the depth of the department (more close to the base), the more employees.
function numberOfEmployees(departmentDepth) {
  const MAX_EMPLOYEES = 12
  const LEVEL_MULTIPLIER = 2

  const maxEmployees = Math.min(MAX_EMPLOYEES, departmentDepth * LEVEL_MULTIPLIER)
  return randomInt(0, maxEmployees)
}

function generateEmployees(departmentDepth, maxDepth) {
  const minEmployees = departmentDepth === maxDepth ? 1 : 0 // The last element has at least one employee
  const employeesCount = Math.max(minEmployees, numberOfEmployees(departmentDepth))

  const employees = []
  for(let i=0; i<employeesCount; i++)
    employees.push(generateName())

  return employees
}



// The greater the depth of the department (more close to the base), the less departments.
function numberOfDepartments(departmentDepth, maxDepth) {
  if(departmentDepth >= maxDepth ) return 0

  const MAX_DEPARTMENTS = 2 * maxDepth
  const LEVEL_MULTIPLIER = 2

  const maxDepartments = Math.min(MAX_DEPARTMENTS, (maxDepth - departmentDepth) * LEVEL_MULTIPLIER)
  const minDepartments = departmentDepth < maxDepth ? 1 : 0 // The tree has the same number of levels for all branches
  return Math.max(minDepartments, randomInt(0,maxDepartments))
}


function generateDepartment(departmentDepth, maxDepth, name) {
  if (departmentDepth > maxDepth) return null; // Nothing here

  // Generate sub levels
  let subDepartments = []

  if (departmentDepth < maxDepth) {
    const departmentsCount = numberOfDepartments(departmentDepth, maxDepth)

    for(let i=0; i<departmentsCount; i++) {
      const subDepartment = generateDepartment(departmentDepth + 1, maxDepth)
      subDepartment && subDepartments.push(subDepartment)
    }
  }

  // Data of this department
  return {
    id: generateRandomID(),
    name: name || departmentIterator.next().value.name,
    employees: generateEmployees(departmentDepth, maxDepth),
    departments: subDepartments,
  };
}




const MAX_LEVELS = 5
const levels = randomInt(2, MAX_LEVELS)
// const levels = 5
const foo = {
  company: generateCompanyName(),
  departments: [
    generateDepartment( 1 , levels, 'Presidencia')
  ]
}
console.log(JSON.stringify(foo, null, 2))

// for(let level=0; level<=10; level++)
//   console.log(generateCompanyName())


// for(let level=0; level<=6; level++) {
//   let items = []
//   for(let item=0; item<=10; item++) items.push(numberOfDepartments(level))
//   console.log(level, items.join(','))
// }



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
