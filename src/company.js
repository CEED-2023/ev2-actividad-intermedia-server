import { generateCompany } from './generators/company_generator.js'

function departmentId(department) {
  return department.id
}

const COMPANY_REQUEST_SCHEMA = {
  querystring: {
    type: 'object',
    properties: {
      id: {
        type: 'integer'
      }
    },
    required: ['id']
  }
}

async function routes(fastify, _options) {

  async function companyData_handler(request, _reply) {
    const id = request.query.id
    let company = generateCompany(id)

    return {
      id: company.id,
      name: company.company_name,
      departments: company.departments.map(departmentId)
    }
  }

  ['/', '/company'].forEach(path => {
    fastify.route({
      method: ['GET'], // you could define multiple methods
      url: path,
      schema: COMPANY_REQUEST_SCHEMA,
      handler: companyData_handler
    })
  })

  // Get the full company for debuggin purposes
  fastify.get(
    '/company/full',
    { schema: COMPANY_REQUEST_SCHEMA },
    async (request, _reply) => {
      const id = request.query.id
      return generateCompany(id)
    }
  )
}


export default routes
