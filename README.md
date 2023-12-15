# Wally Enterprises API

This API will generate companies given a numeric Id. The companies will always have an employee named "Wally" in one of the departments.

 You can access the API's documentation at `/docs` path in the server.

The API is created for creating exercises for asynchronous code in JavaScript. The endpoints that should be used for that are:
- `/company`
- `/department`

There are some other endpoints created for testing:
- `/company/full`: it will return all the company's data, instead of returning data by level. This is useful for downloading the company's data and debugging the applications.
- `/test/department` and `/test/company`: they add a `company_data` query parameter. Passing a company's JSON in that parameter will make the endpoints work with the data provided. The JSON data must be URL encoded. You can get a company's JSON with the `/company/full` endpoint and modify it as needed.

The requests are served with a random delay. For serving the request with no delays you can provide a query parameter `delay` with value `N`.
