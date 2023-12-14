import Fastify from 'fastify'
import fastifySwagger from "@fastify/swagger";

const fastify = Fastify({
  logger: true
})

fastify.register(fastifySwagger, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'My API',
      description: 'My API description',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    openapi: '3.0.0', // Specify OpenAPI version
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
          },
        },
      },
    },
  },
});

fastify.get('/user/:id', {
  schema: {
    description: 'Get user by ID',
    tags: ['user'],
    params: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': {
            example: {
              user: {
                $ref: '#/components/schemas/User', // Reference the User definition
              },
            },
          },
        },
      },
    },
  },
  handler: (request, reply) => {
    // Your route logic here
    const userId = request.params.id;
    // Retrieve user data and send the response
    const user = { id: userId, name: 'John Doe', email: 'john.doe@example.com' };
    reply.send({ user });
  },
});


fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
