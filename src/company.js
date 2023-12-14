import { generateCompany } from './generators/company_generator.js'

function onlyId(department) {
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

const COMPANY_TEST_SCHEMA = {
  body: {
    type: 'object',
    required: ['id', 'company_data'],
    properties: {
      id: { type: 'string' },
      company_data: { type: 'object' }
    }
  }
};

async function routes(fastify, _options) {


  function companyData(company) {
    return {
      id: company.id,
      name: company.company_name,
      departments: company.departments.map(onlyId)
    }
  }

  async function companyData_handler(request, _reply) {
    const id = request.query.id
    let company = generateCompany(id)

    return companyData(company)
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

  fastify.post(
    '/company/test',
    { schema: COMPANY_TEST_SCHEMA },
    async (request, _reply) => {
      let company = request.body.company_data

      return companyData(company)
    }
  )

}


export default routes
