# API with NodeJS and MongoDB
## Description

This is a simple API with NodeJS and MongoDB. It is a simple CRUD with a user model. It perform the following actions:

- Create a user
- Read a user
- Update a user
- Delete a user

## Installation

To install this API you need to have installed NodeJS and MongoDB. Then you need to clone this repository and run the following command:

```bash
npm install
```
```bash
npm install mongoose
```
```bash
npm install express
```

## Usage

To use this API you need to run the following command:

```bash
node index.js
```
You can also change the port in the index.js file.
To test the API at port 3006 you can use Postman or Insomnia and perform the following requests:

- Create a user: POST http://localhost:3006/players
- Read all user: GET http://localhost:3006/players
- Read a user: GET http://localhost:3006/players/:id
- Update a user: PUT http://localhost:3006/players/:id
- Delete a user: DELETE http://localhost:3006/players/:id

## Contributing
Issues and pull requests are welcome!

## License
[MIT](https://choosealicense.com/licenses/mit/)
