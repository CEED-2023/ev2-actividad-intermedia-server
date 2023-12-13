async function routes (fastify, _options) {

  fastify.get('/department', async function handler (_request, _reply) {
    return { hello: 'department' }
  })

}


export default routes
