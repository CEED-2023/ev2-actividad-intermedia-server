import { generateCompany } from './generators/company_generator.js'

function onlyId(department) {
  return department.id
}

function searchDepartmentById(departments, targetId) {
  for (const department of departments) {
      if (department.id === targetId) {
          return department;
      } else if (department.departments.length > 0) {
          // Recursively search in nested departments
          const result = searchDepartmentById(department.departments, targetId);
          if (result) {
              return result;
          }
      }
  }
  return null;
}

async function routes(fastify, _options) {

  const DEPARTMENT_REQUEST_SCHEMA = {
    querystring: {
      type: 'object',
      properties: {
        company_id: {
          type: 'integer'
        },
        department_id: {
          type: 'string'
        }
      },
      required: ['company_id', 'department_id']
    }
  }


  fastify.get('/department',
    { schema: DEPARTMENT_REQUEST_SCHEMA },
    async function handler(request, _reply) {
      const companyId = request.query.company_id
      const departmentId = request.query.department_id

      let company = generateCompany(companyId)
      
      let department = searchDepartmentById(company.departments, departmentId)
      if(!department) {
        return { error: 'Department not found' }
      }

      return {
        id: department.id,
        name: department.name,
        employees: department.employees,
        departments: department.departments.map(onlyId)
      }
    })

}


export default routes
