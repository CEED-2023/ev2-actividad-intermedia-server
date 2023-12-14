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

const COMPANY_QUERYSTRING_SCHEMA = {
  type: 'object',
  properties: {
    id: { type: 'integer' }
  },
  required: ['id'],

}

const COMPANY_REQUEST_SCHEMA = {
  summary: "Get company's data",
  description: "Gets the company's data for the given id",

  querystring: COMPANY_QUERYSTRING_SCHEMA,
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
        items: {
          items: { $ref: 'Department_Recursive#' },
        }
      }
    },
    required: ["id", "company_name", "departments"]
  }
}

const COMPANY_FULL_SCHEMA = {
  summary: "Get all the company's data at once",
  description: "Gets the company's data for the given id",

  querystring: COMPANY_QUERYSTRING_SCHEMA,
  response: COMPANY_FULL_RESPONSE
}

const COMPANY_TEST_SCHEMA = {
  summary: "Returns data for a provided company",
  description: `
Gets the company's data. The full company's data is provided in the body of the request. \
This way, you can use your own data to test the API.
  `,

  body: {
    type: 'object',
    required: ['id', 'company_data'],
    properties: {
      id: { type: 'string' },
      company_data: { type: 'object' }
    }
  },
  response: COMPANY_FULL_RESPONSE
}

export {
  COMPANY_REQUEST_SCHEMA,
  COMPANY_FULL_SCHEMA,
  COMPANY_TEST_SCHEMA,
}
