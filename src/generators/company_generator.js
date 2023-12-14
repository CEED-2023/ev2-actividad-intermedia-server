import { setSeed, randomInt } from './random.js';
import { generateCompanyName } from './company_name_generator.js';
import generatePersonName from './person_name_generator.js';
import { generateRandomID, createDepartmentIterator } from './departments_generator.js';
import addWally from './utils/add_wally.js';

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
    employees.push(generatePersonName())

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

function generateDepartment(departmentIterator, departmentDepth, maxDepth, name) {
  if (departmentDepth > maxDepth) return null; // Nothing here

  // Generate sub levels
  let subDepartments = []

  if (departmentDepth < maxDepth) {
    const departmentsCount = numberOfDepartments(departmentDepth, maxDepth)

    for(let i=0; i<departmentsCount; i++) {
      const subDepartment = generateDepartment(departmentIterator, departmentDepth + 1, maxDepth)
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


function generateCompany(id) {
  setSeed(String(id)) // Set the seed to generate the same company if the id is the same

  const MAX_LEVELS = 5
  const levels = randomInt(2, MAX_LEVELS)

  const departmentIterator = createDepartmentIterator();

  const company = {
    id: parseInt(id),
    company_name: generateCompanyName(),
    departments: [
      generateDepartment(departmentIterator, 1 , levels, 'Presidencia')
    ]
  }

  // We need the company to have a Wally
  addWally(company)
  return company
}

export {
  generateCompany
}
