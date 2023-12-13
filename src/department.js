async function routes (fastify, _options) {

  fastify.get('/department',
    {
      schema: {
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
    },
    async function handler (_request, _reply) {
      return { hello: 'department' }
    })

}


export default routes
