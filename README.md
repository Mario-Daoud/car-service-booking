# Car service API
This documentation provides information about the routes available in the car service API.

## Base URL
The base URL for all the routes is https://carserviceapi.herokuapp.com

# Routes
For api usage add /api/"Route"
## Cars
### GET /
Returns a list of all cars.

- Method: GET
- Endpoint: /
- Response:
  - Status Code: 200 (OK)
  - Body: Array of car objects

#### Example
```
request: /api/cars
response:
{
  _id: "646e4f09514d891acc982cf9",
  name: "Dodge",
  model: "Charger",
  buildYear: 1969,
  price: 75000,
  __v: 0
},
{
  _id: "646e4f5a7c323ae5503d064d",
  name: "Toyota",
  model: "Camry",
  buildYear: 2020,
  price: 30000,
  __v: 0
}
```

### GET /:id
Returns a specific car based on the provided ID.

- Method: GET
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the car to retrieve
- Response:
  - Status Code: 200 (OK)
  - Body: Car object
- Error Responses:
  - Status Code: 400 (Bad Request)
    - Body: "Invalid car ID."
  - Status Code: 404 (Not Found)
    - Body: "The car with the given ID was not found."

#### Example
```
request: /api/cars/646e4f09514d891acc982cf9
response: 
{
  _id: "646e4f09514d891acc982cf9",
  name: "Dodge",
  model: "Charger",
  buildYear: 1969,
  price: 75000,
  __v: 0
}
```

### POST /
Creates a new car.

- Method: POST
- Endpoint: /
- Request Body: Car object (name, model, buildYear, price)
- Response:
  - Status Code: 200 (OK)
  - Body: Created car object
- Error Response:
  - Status Code: 400 (Bad Request)
    - Body: Validation error message

#### Example
```
request: /api/cars/646e4f09514d891acc982cf9
request body: 
{
  name: "Dodge",
  model: "Charger",
  buildYear: 1969,
  price: 75000,
}

response: 
{
  _id: "646e4f09514d891acc982cf9",
  name: "Dodge",
  model: "Charger",
  buildYear: 1969,
  price: 75000,
  __v: 0
}
```

### PUT /:id
Updates an existing car based on the provided ID.

- Method: PUT
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the car to update
- Request Body: Updated car object (name, model, buildYear, price)
- Response:
  - Status Code: 200 (OK)
  - Body: Updated car object
- Error Responses:
  - Status Code: 400 (Bad Request)
    - Body: Validation error message
  - Status Code: 404 (Not Found)
    - Body: "The car with the given ID was not found."

#### Example
```
request: /api/cars/646e4f09514d891acc982cf9
request body: 
{
  name: "Dodge",
  model: "Charger",
  buildYear: 1969,
  price: 75000,
}

response: 
{
  _id: "646e4f09514d891acc982cf9",
  name: "Dodge",
  model: "Charger",
  buildYear: 1969,
  price: 75000,
  __v: 0
}
```

### DELETE /:id
Deletes a car based on the provided ID.

- Method: DELETE
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the car to delete
- Response:
  - Status Code: 200 (OK)
  - Body: Deleted car object
- Error Response:
  - Status Code: 404 (Not Found)
    - Body: "The car with the given ID was not found."
 
 #### Example
```
request: /api/cars/646e4f09514d891acc982cf9
response: 
{
  _id: "646e4f09514d891acc982cf9",
  name: "Dodge",
  model: "Charger",
  buildYear: 1969,
  price: 75000,
  __v: 0
}
```
 
### Models
The API uses the Car model defined in the car.model.js file. The model contains the following properties:
```
name (string): The name of the car.
model (string): The model of the car.
buildYear (number): The year the car was built.
price (number): The price of the car.
```

## Services
### GET /
Returns a list of all services.

- Method: GET
- Endpoint: /
- Response:
  - Status Code: 200 (OK)
  - Body: Array of service objects

#### Example
```
{
  "_id": "646e4ec100f1b674fa218e53",
  "name": "Oil Change",
  "description": "Change the oil",
  "price": 100,
  "__v": 0
},
{
  "_id": "646e4f09514d891acc982d08",
  "name": "Oil Change",
  "description": "Change the oil",
  "price": 100,
  "__v": 0
}
```

### GET /:id
Returns a specific service based on the provided ID.

- Method: GET
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the service to retrieve
- Response:
  - Status Code: 200 (OK)
  - Body: Service object
- Error Responses:
  - Status Code: 400 (Bad Request)
    - Body: "Invalid car ID."
  - Status Code: 404 (Not Found)
    - Body: "The service with the given ID was not found."

#### Example
```
request: /api/services/646e4ec100f1b674fa218e53
response: 
{
  "_id": "646e4ec100f1b674fa218e53",
  "name": "Oil Change",
  "description": "Change the oil",
  "price": 100,
  "__v": 0
}
```

### Models
The API uses the Service model defined in the service.model.js file. The model contains the following properties:
```
name (string): The name of the service.
description (string): The description of the service.
price (number): The price of the service.
```

## Customers
### GET /
Returns a list of all customers.

- Method: GET
- Endpoint: /
- Response:
  - Status Code: 200 (OK)
  - Body: Array of customer objects

#### Example
```
{
  _id: "646e4ec100f1b674fa218e50",
  firstName: "Updated",
  lastName: "Customer",
  email: "test@gmail.com",
  password: "testteste",
  hasPermission: true,
  __v: 0
},
{
  _id: "646e4ec100f1b674fa218e54",
  firstName: "john",
  lastName: "cena",
  email: "joce@test.com",
  password: "password",
  __v: 0
}
```

### GET /:id
Returns a specific customer based on the provided ID.

- Method: GET
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the customer to retrieve
- Response:
  - Status Code: 200 (OK)
  - Body: Customer object
- Error Responses:
  - Status Code: 400 (Bad Request)
    - Body: "Invalid customer ID."
  - Status Code: 404 (Not Found)
    - Body: "The customer with the given ID was not found."

#### Example
```
request: /api/customers/646e4ec100f1b674fa218e54
response:
{
  _id: "646e4ec100f1b674fa218e54",
  firstName: "john",
  lastName: "cena",
  email: "joce@test.com",
  password: "password",
  __v: 0
}
```

### POST /
Creates a new customer.

- Method: POST
- Endpoint: /
- Request Body: Customer object (firstName, lastName, email, password)
- Response:
  - Status Code: 200 (OK)
  - Body: Created customer object
- Error Response:
  - Status Code: 400 (Bad Request)
    - Body: Validation error message

#### Example
```
request: /api/customers/646e4ec100f1b674fa218e54
request body: 
{
  firstName: "john",
  lastName: "cena",
  email: "joce@test.com",
  password: "password",
}

response: 
{
  _id: "646e4ec100f1b674fa218e54",
  firstName: "john",
  lastName: "cena",
  email: "joce@test.com",
  password: "$2b$10$.SgAYZhSior/qV/icELNnu5M4nuhNUlPvlvQQ7Bs0m1VgQcynTjbm",
  __v: 0
}
```

### PUT /:id
Updates an existing customer based on the provided ID.

- Method: PUT
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the customer to update
- Request Body: Updated car object (firstName, lastName, email, password)
- Response:
  - Status Code: 200 (OK)
  - Body: Updated customer object
- Error Responses:
  - Status Code: 400 (Bad Request)
    - Body: Validation error message
  - Status Code: 404 (Not Found)
    - Body: "The customer with the given ID was not found."

#### Example
```
request: /api/customers/646e4ec100f1b674fa218e54
request body: 
{
  firstName: "john",
  lastName: "cena",
  email: "joce@test.com",
  password: "password",
}

response: 
{
  _id: "646e4ec100f1b674fa218e54",
  firstName: "john",
  lastName: "cena",
  email: "joce@test.com",
  password: "$2b$10$.SgAYZhSior/qV/icELNnu5M4nuhNUlPvlvQQ7Bs0m1VgQcynTjbm",
  __v: 0
}
```

### DELETE /:id
Deletes a customer based on the provided ID.

- Method: DELETE
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the customer to delete
- Response:
  - Status Code: 200 (OK)
  - Body: Deleted customer object
- Error Response:
  - Status Code: 404 (Not Found)
    - Body: "The customer with the given ID was not found."
 
#### Example
```
request: /api/customers/646e4ec100f1b674fa218e54
response:
{
  _id: "646e4ec100f1b674fa218e54",
  firstName: "john",
  lastName: "cena",
  email: "joce@test.com",
  password: "password",
  __v: 0
}
```
 
### Models
The API uses the Customer model defined in the customer.model.js file. The model contains the following properties:
```
firstName (string): The first name of the customer.
lastName (string): The last name of the customer.
email (string): The email of the customer.
password (string): The password of the customer.
```

## Appointments
### GET /
Returns a list of all appointments.

- Method: GET
- Endpoint: /
- Response:
  - Status Code: 200 (OK)
  - Body: Array of appointment objects

#### Example
```
{
  _id: "646e52114bee00c93890aaeb",
  customer: {
    _id: "646e52114bee00c93890aada",
    firstName: "john",
    lastName: "cena",
    email: "joce@test.com",
    password: "password",
    __v: 0
  },
  car: {
    _id: "646e52114bee00c93890aad8",
    name: "Toyota",
    model: "Camry",
    buildYear: 2020,
    price: 30000,
    __v: 0
  },
  date: "2023-06-01T00:00:00.000Z",
  service: {
    _id: "646e52114bee00c93890aad9",
    name: "Oil Change",
    description: "Change the oil",
    price: 100,
    __v: 0
  },
  __v: 0
},
{
  _id: "646e5222c7c1f00463eb6aa9",
  customer: {
    _id: "646e5222c7c1f00463eb6a98",
    firstName: "john",
    lastName: "cena",
    email: "joce@test.com",
    password: "password",
    __v: 0
  },
  car: {
    _id: "646e5222c7c1f00463eb6a96",
    name: "Toyota",
    model: "Camry", 
    buildYear: 2020,
    price: 30000,
    __v: 0
  },
  date: "2023-06-01T00:00:00.000Z",
  service: {
    _id: "646e5222c7c1f00463eb6a97",
    name: "Oil Change",
    description: "Change the oil",
    price: 100,
    __v: 0
  },
  __v: 0
}
```

### GET /:id
Returns a specific appointment based on the provided ID.

- Method: GET
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the appointment to retrieve
- Response:
  - Status Code: 200 (OK)
  - Body: appointment object
- Error Responses:
  - Status Code: 400 (Bad Request)
    - Body: "Invalid appointment ID."
  - Status Code: 404 (Not Found)
    - Body: "The appointment with the given ID was not found."

#### Example
```
request: /api/appointments/646e52114bee00c93890aaeb
response: 
{
  _id: "646e52114bee00c93890aaeb",
  customer: {
    _id: "646e52114bee00c93890aada",
    firstName: "john",
    lastName: "cena",
    email: "joce@test.com",
    password: "password",
    __v: 0
  },
  car: {
    _id: "646e52114bee00c93890aad8",
    name: "Toyota",
    model: "Camry",
    buildYear: 2020,
    price: 30000,
    __v: 0
  },
  date: "2023-06-01T00:00:00.000Z",
  service: {
    _id: "646e52114bee00c93890aad9",
    name: "Oil Change",
    description: "Change the oil",
    price: 100,
    __v: 0
  },
  __v: 0
}
```

### POST /
Creates a new appointment.

- Method: POST
- Endpoint: /
- Request Body: Appointment object (customerId, carId, date, serviceId)
- Response:
  - Status Code: 200 (OK)
  - Body: Created appointment object
- Error Response:
  - Status Code: 400 (Bad Request)
    - Body: Validation error message

#### Example
```
request: /api/appointments
request body:
{
  "customerId": "646e5f7284e5e1e075b9b6b2",
  "carId": "646e5f6184e5e1e075b9b6af",
  "date": "2023-05-20",
  "serviceId": "646e4ec100f1b674fa218e53"
}

response: 
{
  "customer": {
    "_id": "646e5f7284e5e1e075b9b6b2",
    "firstName": "testteste",
    "lastName": "testteste",
    "email": "testteste@gmail.com",
    "password": "$2b$10$j2Ur5DOWOtVjkSLBmGyyG.jpJbnv2tiZ6ehpuRwU6y9E3nn0Hp4qO",
    "__v": 0
  },
  "car": {
    "_id": "646e5f6184e5e1e075b9b6af",
    "name": "Ford",
    "model": "Mustang",
    "buildYear": 1964,
    "price": 50000,
    "__v": 0
  },
  "date": "2023-05-20T00:00:00.000Z",
  "service": {
    "_id": "646e4ec100f1b674fa218e53",
    "name": "Oil Change",
    "description": "Change the oil",
    "price": 100,
    "__v": 0
  },
  "_id": "646e6d6284e5e1e075b9b6c5",
  "__v": 0
}
```

### PUT /:id
Updates an existing appointment based on the provided ID.

- Method: PUT
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the appointment to update
- Request Body: Updated appointment object (customerId, carId, date, serviceId)
- Response:
  - Status Code: 200 (OK)
  - Body: Updated appointment object
- Error Responses:
  - Status Code: 400 (Bad Request)
    - Body: Validation error message
  - Status Code: 404 (Not Found)
    - Body: "The appointment with the given ID was not found."

#### Example
```
request: /api/appointments/646e6d6284e5e1e075b9b6c5
request body:
{
  "customerId": "646e5f7284e5e1e075b9b6b2",
  "carId": "646e5f6184e5e1e075b9b6af",
  "date": "2023-05-20",
  "serviceId": "646e4ec100f1b674fa218e53"
}

response: 
{
  "customer": {
    "_id": "646e5f7284e5e1e075b9b6b2",
    "firstName": "testteste",
    "lastName": "testteste",
    "email": "testteste@gmail.com",
    "password": "$2b$10$j2Ur5DOWOtVjkSLBmGyyG.jpJbnv2tiZ6ehpuRwU6y9E3nn0Hp4qO",
    "__v": 0
  },
  "car": {
    "_id": "646e5f6184e5e1e075b9b6af",
    "name": "Ford",
    "model": "Mustang",
    "buildYear": 1964,
    "price": 50000,
    "__v": 0
  },
  "date": "2023-05-20T00:00:00.000Z",
  "service": {
    "_id": "646e4ec100f1b674fa218e53",
    "name": "Oil Change",
    "description": "Change the oil",
    "price": 100,
    "__v": 0
  },
  "_id": "646e6d6284e5e1e075b9b6c5",
  "__v": 0
}
```

### DELETE /:id
Deletes an appointment based on the provided ID.

- Method: DELETE
- Endpoint: /:id
- Parameters:
  - id (required): The ID of the appointment to delete
- Response:
  - Status Code: 200 (OK)
  - Body: Deleted appointment object
- Error Response:
  - Status Code: 404 (Not Found)
    - Body: "The appointment with the given ID was not found."
 
#### Example
```
request: /api/appointments/646e6d6284e5e1e075b9b6c5

response: 
{
  "customer": {
    "_id": "646e5f7284e5e1e075b9b6b2",
    "firstName": "testteste",
    "lastName": "testteste",
    "email": "testteste@gmail.com",
    "password": "$2b$10$j2Ur5DOWOtVjkSLBmGyyG.jpJbnv2tiZ6ehpuRwU6y9E3nn0Hp4qO",
    "__v": 0
  },
  "car": {
    "_id": "646e5f6184e5e1e075b9b6af",
    "name": "Ford",
    "model": "Mustang",
    "buildYear": 1964,
    "price": 50000,
    "__v": 0
  },
  "date": "2023-05-20T00:00:00.000Z",
  "service": {
    "_id": "646e4ec100f1b674fa218e53",
    "name": "Oil Change",
    "description": "Change the oil",
    "price": 100,
    "__v": 0
  },
  "_id": "646e6d6284e5e1e075b9b6c5",
  "__v": 0
}
```
 
### Models
The API uses the Customer model defined in the appointment.model.js file. The model contains the following properties:
```
customer (Customer): The customer of the appointment.
car (Car): The car of the appointment.
date (Date): The date of the appointment.
service (Service): The service of the appointment.
```

When POST/PUT the following model should be followed:
```
customerId (string): The id of the customer of the appointment.
carId (string): The id of the car of the appointment.
date (Date): The date of the appointment.
serviceId (string): The id of the service of the appointment.
```
