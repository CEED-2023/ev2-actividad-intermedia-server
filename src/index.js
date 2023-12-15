import Fastify from 'fastify'
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"

import delayMiddleware from './middleware/delay_middleware.js'
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
  },
}

// Code is not showing correctly in the Swagger UI, so we add some custom CSS
const CUSTOM_CSS = `
.swagger-ui .markdown p {
  line-height: 1.4em;
}

.swagger-ui .markdown code, .swagger-ui .renderedMarkdown code {
  padding: 3px 5px;
}
`

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
  theme: {
    title: 'Wally Enterprises API',
    css: [
      { filename: 'theme.css' , content: CUSTOM_CSS }
    ],
  },
}

commonSchemas.forEach(schema => fastify.addSchema(schema))
fastify.register(fastifySwagger, swaggerOptions)
fastify.register(fastifySwaggerUi, swaggerUiOptions)

// Adds a delay to all requests
const MIN_DELAY = 500
const MAX_DELAY = 2000
const EXCEPTIONS = [/.*\/docs\//]
fastify.addHook('onRequest', delayMiddleware(MIN_DELAY, MAX_DELAY, EXCEPTIONS))

// Run the server!
try {
  fastify.register(company)
  fastify.register(department)
  fastify.listen({ port: PORT, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

