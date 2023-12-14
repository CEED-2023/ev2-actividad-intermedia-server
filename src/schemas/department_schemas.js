const DEPARTMENT_RESPONSE = {
  200: {
    description: 'Department found',
    $ref: 'Department#'
  },
  400: {
    description: 'Department not found',
    type: 'object',
    properties: { error: { type: 'string' } }
  }
}

const DEPARTMENT_REQUEST_SCHEMA = {
  summary: "Get the department's data",
  description: "Gets the department's data for the given company_id and department_id",

  querystring: {
    type: 'object',
    required: ['company_id', 'department_id'],
    properties: {
      company_id: { type: 'integer' },
      department_id: { type: 'string' }
    }
  },
  response: DEPARTMENT_RESPONSE
}

const DEPARTMENT_TEST_SCHEMA = {
  summary: "Get the department's data for a provided company",
  description: "\
**This endopoint is intended for testing purposes**. \n \
Gets the department's data for the given `company_id` and `department_id`. \
The full company's data is provided in the body of the request. \
This way, you can use your own data to test the API. \
    ",

  body: {
    type: 'object',
    required: ['company_id', 'department_id', 'company_data'],
    properties: {
      company_id: { type: 'integer' },
      department_id: { type: 'string' },
      company_data: { $ref: 'Company#' }
    }
  },
  response: DEPARTMENT_RESPONSE
};

export {
  DEPARTMENT_REQUEST_SCHEMA,
  DEPARTMENT_TEST_SCHEMA
}
