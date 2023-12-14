// Import the framework and instantiate it
import Fastify from 'fastify'
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import commonSchemas from './schemas/common_schemas.js'
import company from './company.js'
import department from './department.js'

const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port

const fastify = Fastify({
  logger: true
})

const swaggerOptions = {
  swagger: {
      info: {
          title: "Wally Enterprises API",
          description: "APIs with companies Wally has worked for",
          version: "1.0.0",
      },
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      // tags: [{ name: "Default", description: "Default" }],
  },
}

commonSchemas.forEach( schema => fastify.addSchema(schema))

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);

// Run the server!
try {
  fastify.register(company)
  fastify.register(department)
  fastify.listen({ port: PORT, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

