// Import the framework and instantiate it
import Fastify from 'fastify'
import company from './company.js'
import department from './department.js'

const fastify = Fastify({
  logger: true
})

// Run the server!
try {
  fastify.register(company)
  fastify.register(department)
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

