async function routes (fastify, options) {

  fastify.get('/', async function handler (request, reply) {
    return { hello: 'world' }
  })

}


export default routes
