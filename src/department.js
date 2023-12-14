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
      required: ['company_id', 'department_id'],
      properties: {
        company_id: {
          type: 'integer'
        },
        department_id: {
          type: 'string'
        }
      }
    }
  }

  const DEPARTMENT_TEST_SCHEMA = {
    body: {
      type: 'object',
      required: ['company_id', 'department_id', 'company_data'],
      properties: {
        company_id: {
          type: 'integer'
        },
        department_id: {
          type: 'string'
        },
        company_data: { type: 'object' }
      }
    }
  };


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
    async function handler(request, _reply) {
      const companyId = request.query.company_id
      const departmentId = request.query.department_id

      let company = generateCompany(companyId)

      try {
        return departmentData(company, departmentId)
      } catch (error) {
        return { error: error.message }
      }
    })

    fastify.post(
      '/department/test',
      { schema: DEPARTMENT_TEST_SCHEMA },
      async function handler(request, _reply) {
        const departmentId = request.body.department_id
        let company = request.body.company_data

        try {
          return departmentData(company, departmentId)
        } catch (error) {
          return { error: error.message }
        }
      })

}


export default routes
