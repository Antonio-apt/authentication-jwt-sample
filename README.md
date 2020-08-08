# Authentication jwt and passport sample :star:

A Node.js simple example of an api with route authentication using jwt and passport. Also using sequelize as ORM for a SQlite database.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.


## Install

    $ git clone https://github.com/Antonio-apt/authentication-jwt-sample
    $ cd authentication-jwt-sample
    $ yarn install

## Configure app


You must have an .env file with its environment variables, in the project there is already a `.env.example` to be used as a base

Open `./database/config/database.js` to access the database settings, in the example is for SQlite.

To configure the database you must:

- create a database.db file;
- With the Sequelize-cli installed execute the command "npx sequelize-cli db:migrate";

## Running the project

    $ yarn start

## Routes :fire:	

The api has only 3 routes for demonstration, one dedicated to the registration of users, a route to the login of these users and a protected route where only those logged in have access

### Register

**POST** in `/register`route with the example body:
``` json
 {
    "name": "test",
    "email": "test@test",
    "password": "pass"
}
```
Api's successful return must be:

``` json
{
    "message": "User test successfully created"
}
```

### Login

POST in `/login` route with the example body:

``` json
{
	"email": "test@test",
	"password": "pass"
}
```

Api's successful return should be: 

``` json
{
    "token": "{token here}"
}
```

### Profile

GET in `/profile` route with the example header:

> Authorization : JWT {token here}

Api's successful return should be:

``` json
{
    "user": "Jose",
    "token": "JWT {token here}"
}
```

---
Tnks :purple_heart:

