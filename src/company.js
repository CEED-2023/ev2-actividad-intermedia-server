import { generateCompany } from './generators/company_generator.js'

async function routes(fastify, _options) {

  async function handler(request, _reply) {
    const id = request.query.id
    let company = generateCompany(id)

    //TO-DO: return only company data and first department
    return company
  }

  ['/', '/company'].forEach(path => {
    fastify.route({
      method: ['GET'], // you could define multiple methods
      url: path,
      schema: {
        querystring: {
          type: 'object',
          properties: {
            id: {
              type: 'integer'
            }
          },
          required: ['id']
        }
      },
      handler: handler
    })
  })
}


export default routes
