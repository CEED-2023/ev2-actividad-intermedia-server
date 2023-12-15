


https://fastify.dev/docs/latest/Guides/Getting-Started

https://github.com/punkish/fastify-better-sqlite3



PARA LA DOCUMENTACION:
https://ruanmartinelli.com/posts/using-schemas-fastify-fun-and-profit/
https://stackoverflow.com/questions/76168789/how-to-setup-fastify-swagger-and-fastify-swagger-ui-with-typescript
https://medium.com/@simonescigliuzzi/create-a-complete-web-api-set-from-scratch-with-fastify-swagger-and-heroku-c6eb1c293215


https://stackoverflow.com/questions/75955007/fastify-swagger-how-to-use-ref



https://www.baeldung.com/openapi-json-query-parameters




Este es el JSON schema para validar una compañia
```json
{
  type: "object",
  properties: {
    id: { type: "integer" },
    company_name: { type: "string" },
    departments: {
      type: "array",
        items: { "$ref": "#/definitions/department" }
     }
  },
  required: ["id", "company_name", "departments"],
  definitions: {
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
          items: { $ref: '#/definitions/department' },
        }
      }
    }
  },
}
```


Esto es una compañía válida:
```json
{
	"id": 1,
	"company_name": "Ultra Universe",
	"departments": [
		{
			"id": "FY904E2M",
			"name": "Presidencia",
			"employees": [
				"Vergara Vera, Silvia",
				"Escobar Sánchez, Enrique"
			],
			"departments": [
				{
					"id": "YLI62L58",
					"name": "Asesoría Legal",
					"employees": [
						"Ulloa Aranda, Alicia",
						"Flores Guzmán, Ana",
						"León Aranda, Daniela",
						"Sánchez Pizarro, Lucía"
					],
					"departments": []
				},
				{
					"id": "766A34CX",
					"name": "Desarrollo de Estrategias de Desarrollo de Negocios Digitales",
					"employees": [
						"Wally",
						"Riquelme Vera, Jorge"
					],
					"departments": []
				}
			]
		}
	]
}
```
