const DEPARTMENT_QUERYSTRING = {
  type: 'object',
  required: ['company_id', 'department_id'],
  properties: {
    company_id: { type: 'integer' },
    department_id: { type: 'string' },
    delay: {"enum": ["", "N"]},
    errors: {"enum": ["", "N", "Y"]}
  }
}

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
  description: "\
Gets the department's data for the given `company_id` and `department_id` \
",

  querystring: DEPARTMENT_QUERYSTRING,
  response: DEPARTMENT_RESPONSE
}


const DEPARTMENT_TEST_QUERYSTRING = {
  type: 'object',
  required: ['company_id', 'department_id'],
  properties: {
    company_id: { type: 'integer' },
    department_id: { type: 'string' },
    delay: {"enum": ["", "N"]},
    errors: {"enum": ["", "N", "Y"]},
    company_data: { type: 'string' }
  }
}

const DEPARTMENT_TEST_SCHEMA = {
  summary: "Get the department's data for a provided company",
  description: "\
**This endopoint is intended for testing purposes**. \n \
Gets the department's data for the given `company_id` and `department_id`. \
The full company's data is provided in the `company_data` parameter. \
This way, you can use your own data to test the API. \
    ",

  querystring: DEPARTMENT_TEST_QUERYSTRING,
  response: DEPARTMENT_RESPONSE
}

export {
  DEPARTMENT_REQUEST_SCHEMA,
  DEPARTMENT_TEST_SCHEMA
}
