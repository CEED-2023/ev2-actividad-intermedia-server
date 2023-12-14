import { generateCompany } from './generators/company_generator.js'

import {
  COMPANY_REQUEST_SCHEMA,
  COMPANY_TEST_SCHEMA,
  COMPANY_FULL_SCHEMA
} from './schemas/company_schemas.js'

function onlyId(department) {
  return department.id
}


async function routes(fastify, _options) {

  function companyData(company) {
    return {
      id: company.id,
      company_name: company.company_name,
      departments: company.departments.map(onlyId)
    }
  }

  async function companyData_handler(request, _reply) {
    const id = request.query.id
    let company = generateCompany(id)

    return companyData(company)
  }

  fastify.get(
    '/company',
    { schema: COMPANY_REQUEST_SCHEMA },
    companyData_handler
  )

  // Get the full company for debuggin purposes
  fastify.get(
    '/company/full',
    { schema: COMPANY_FULL_SCHEMA },
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

      const foo =  companyData(company)
      console.log(foo)
      
      return companyData(company)
    }
  )

}


export default routes
