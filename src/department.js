import { generateCompany } from './generators/company_generator.js'
import {
  DEPARTMENT_REQUEST_SCHEMA,
  DEPARTMENT_TEST_SCHEMA
} from './schemas/department_schemas.js'

function onlyId(department) {
  return department.id
}

function searchDepartmentById(departments, targetId) {
  for (const department of departments) {
      if (department.id === targetId) {
          return department
      } else if (department.departments.length > 0) {
          // Recursively search in nested departments
          const result = searchDepartmentById(department.departments, targetId)
          if (result) {
              return result
          }
      }
  }
  return null
}

async function routes(fastify, _options) {

  function departmentData(company, departmentId) {
    let department = searchDepartmentById(company.departments, departmentId)
    if(!department) {
      throw new Error('Department not found')
    }

    return {
      id: department.id,
      name: department.name,
      employees: department.employees,
      departments: department.departments.map(onlyId)
    }
  }

  fastify.get(
    '/department',
    { schema: DEPARTMENT_REQUEST_SCHEMA },
    async function handler(request, reply) {
      const companyId = request.query.company_id
      const departmentId = request.query.department_id

      let company = generateCompany(companyId)

      try {
        return departmentData(company, departmentId)
      } catch (error) {
        return reply.code(400).send({ error: error.message })
      }
    })

    fastify.get(
      '/test/department',
      { schema: DEPARTMENT_TEST_SCHEMA },
      async function handler(request, reply) {
        const departmentId = request.query.department_id
        let company_raw = request.query.company_data
        let company = JSON.parse(company_raw)

        try {
          return departmentData(company, departmentId)
        } catch (error) {
          return reply.code(400).send({ error: error.message })
        }
      })

}


export default routes
