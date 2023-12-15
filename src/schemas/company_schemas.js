const COMPANY_RESPONSE = {
  200: {
    description: 'Returns company data',
    type: 'object',
    properties: {
        id: { type: 'number' },
        company_name: { type: 'string' },
        departments: {
          type: "array",
          items: { type: "string" }
        }
    }
  }
}

const COMPANY_QUERYSTRING = {
  type: 'object',
  properties: {
    id: { type: 'integer' }
  },
  required: ['id'],
}

const COMPANY_REQUEST_SCHEMA = {
  summary: "Get company's data",
  description: "Gets the company's data for the given id",

  querystring: COMPANY_QUERYSTRING,
  response: COMPANY_RESPONSE
}

const COMPANY_FULL_RESPONSE = {
  200: {
    type: "object",
    properties: {
      id: { type: "integer" },
      company_name: { type: "string" },
      departments: {
        type: "array",
        items: { $ref: 'Department_Recursive#' },
      }
    },
    required: ["id", "company_name", "departments"]
  }
}

const COMPANY_FULL_SCHEMA = {
  summary: "Get all the company's data at once",
  description: "\
**This endpoint is intended for debugging purposes**. \n \
Gets the company's data for the given id.\
",

  querystring: COMPANY_QUERYSTRING,
  response: COMPANY_FULL_RESPONSE
}

const COMPANY_TEST_QUERYSTRING = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    company_data: { type: 'string' }
  },
  required: ['id'],
}

const COMPANY_TEST_SCHEMA = {
  summary: "Returns data for a provided company",
  description: `
**This endopoint is intended for testing purposes**.
Gets the company's data. The full company's data is provided in the \`company_data\` parameter. \
This way, you can use your own data to test the API.
  `,

  querystring: COMPANY_TEST_QUERYSTRING,
  response: COMPANY_RESPONSE
}

export {
  COMPANY_REQUEST_SCHEMA,
  COMPANY_FULL_SCHEMA,
  COMPANY_TEST_SCHEMA,
}
