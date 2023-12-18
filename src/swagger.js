const descriptions = `
APIs with companies Wally has worked for.

All requests addmits the following parameters, for testing purposes:

- \`delay\`: If present with value \`N\`, the responses won't be randomly delayed.
- \`errors\`:
  - If present with value \`Y\`, the responses will be an HTTP error.
  - If present with value \`N\`, the responses won't generate an HTTP error.
  - If not present, the responses will randomly generate an HTTP error
`

const swaggerOptions = {
  swagger: {
    info: {
      title: "Wally Enterprises API",
      description: descriptions,
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
}

// Code is not showing correctly in the Swagger UI, so we add some custom CSS
const CUSTOM_CSS = `
.swagger-ui .markdown code {
  line-height: 1.7em;
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

export {
  swaggerOptions,
  swaggerUiOptions
}
