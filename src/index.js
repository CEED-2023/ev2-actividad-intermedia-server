// import * as fs from 'fs';

import Fastify from 'fastify'
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"

import delayMiddleware from './middleware/delay_middleware.js'
import errorMiddleware from './middleware/error_middleware.js'
import { swaggerOptions, swaggerUiOptions } from './swagger.js'

import commonSchemas from './schemas/common_schemas.js'
import company from './company.js'
import department from './department.js'

const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port

const fastify = Fastify({
  logger: true
})

commonSchemas.forEach(schema => fastify.addSchema(schema))
fastify.register(fastifySwagger, swaggerOptions)
fastify.register(fastifySwaggerUi, swaggerUiOptions)

// Adds a delay to all requests
const MIN_DELAY = 500
const MAX_DELAY = 2000
const EXCEPTIONS = [/.*\/docs\//]

fastify.addHook('onRequest', errorMiddleware)
fastify.addHook('onRequest', delayMiddleware(MIN_DELAY, MAX_DELAY, EXCEPTIONS))

// Run the server!
try {
  fastify.register(company)
  fastify.register(department)
  fastify.listen({ port: PORT, host: '0.0.0.0' })

  // Export documentation to yml. Uncomment this and the fs import at the
  // top of the file to generate the yaml
  // await fastify.listen({ port: PORT, host: '0.0.0.0' })
  // const yaml = fastify.swagger({ yaml: true })
  // fs.writeFileSync('./swagger.yml', yaml)

} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

