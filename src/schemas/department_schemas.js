const DEPARTMENT_RESPONSE = {
  200: {
    description: 'Department found',
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      employees: {
        type: 'array',
        items: { type: 'string' }
      },
      departments: {
        type: 'array',
        items: { type: 'string' }
      }
    },
    required: ['id', 'name', 'employees', 'departments']
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
      company_data: { type: 'object' }
    }
  },
  response: DEPARTMENT_RESPONSE
};

export {
  DEPARTMENT_REQUEST_SCHEMA,
  DEPARTMENT_TEST_SCHEMA
}