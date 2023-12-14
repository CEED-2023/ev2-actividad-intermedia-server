const DEPARTMENT_SCHEMA =  {
  $id: 'Department',
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
      items: { type: "string"}
    }
  },
  required: ["id", "name", "employees", "departments"]
}

const RECURSIVE_DEPARTMENT_SCHEMA =  {
  $id: 'Department_Recursive',
  title: "Department with recursive departments",
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
      items: { $ref: 'Department_Recursive#' },
    }
  },
  required: ["id", "name", "employees", "departments"]
}

const COMPANY_DATA = {
  $id: 'Company',
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

export default [
  DEPARTMENT_SCHEMA,
  RECURSIVE_DEPARTMENT_SCHEMA,
  COMPANY_DATA
]
