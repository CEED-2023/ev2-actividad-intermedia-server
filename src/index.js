// Import the framework and instantiate it
import Fastify from 'fastify'

import fastifyBetterSqlite3 from '@punkish/fastify-better-sqlite3';
import firstRoute from './our-first-route.js'

const fastify = Fastify({
  logger: true
})

// Run the server!
try {

  const opts1 = {};

  const opts2 = {

    // if db file doesn't exist, it will be created unless
    // `betterSqlite3options.fileMustExist: true`
    path: '/path/to/db.sqlite',

    // The following options are passed on to `better-sqlite3`.
    // The default values are shown below, and none are required.
    // Check better-sqlite3 documentation for details.
    betterSqlite3options: {
        readonly: false,
        fileMustExist: false,
        timeout: 5000,
        verbose: null
    }
  };

  fastify.register(fastifyBetterSqlite3, opts1);
  fastify.register(firstRoute)

  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

