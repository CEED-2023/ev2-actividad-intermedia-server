const COMPANY_RESPONSE = {
  200: {
    description: 'Returns company data',
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
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


const COMPANY_FULL_DEFINITIONS =  {
  department: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      employees: {
        type: "array",
        items: { type: "string"}
      },
      departments: {
        type: "array",
        items: {
          "$ref": "#/definitions/department"
        }
      }
    },
    required: ["id", "name", "employees", "departments"]
  }
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
          "$ref": "#/definitions/department"
        }
      }
    },
    required: ["id", "company_name", "departments"]
  }
}



const COMPANY_FULL_SCHEMA = {
  summary: "Get all the company's data at once",
  description: "Gets the company's data for the given id",
  // definitions: COMPANY_FULL_DEFINITIONS,
  querystring: COMPANY_QUERYSTRING_SCHEMA,
  // response: COMPANY_FULL_RESPONSE
}

const COMPANY_TEST_SCHEMA = {
  body: {
    type: 'object',
    required: ['id', 'company_data'],
    properties: {
      id: { type: 'string' },
      company_data: { type: 'object' }
    }
  }
}

export {
  COMPANY_REQUEST_SCHEMA,
  COMPANY_FULL_SCHEMA,
  COMPANY_TEST_SCHEMA,

  COMPANY_FULL_DEFINITIONS
}
