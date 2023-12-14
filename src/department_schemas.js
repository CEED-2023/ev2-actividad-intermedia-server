/*
{
	"id": "FY904E2M",
	"name": "Presidencia",
	"employees": [
		"Vergara Vera, Silvia",
		"Escobar Sánchez, Enrique"
	],
	"departments": [
		"YLI62L58",
		"766A34CX"
	]
}
*/


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
    // required: ['id', 'name', 'employees', 'departments']
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
  body: {
    type: 'object',
    required: ['company_id', 'department_id', 'company_data'],
    properties: {
      company_id: { type: 'integer' },
      department_id: { type: 'string' },
      company_data: { type: 'object' }
    }
  }
};

export {
  DEPARTMENT_REQUEST_SCHEMA,
  DEPARTMENT_TEST_SCHEMA
}
