# Authentication API with JWT Token in Node.js
In the this code I have implemented jsonwebtoken to learn how to use JWT in Node.js to secure endpoints and even authenticate users.


## Basics of Authentication, Authorization, and JWT
So when we talk about Authentication and Authorization it is used in security, particularly when it comes to getting access to a system. 
In simple terms gaining entry into a house is authentication and what you can do while inside is authorization.

### Authentication

Authentication is the process of verifying a user’s identification through the acquisition of credentials and using those credentials to confirm the user’s identity. The authorization process begins if the credentials are legitimate. The authorization process always follows the authentication procedure.

### Authorization

Authorization is the process of allowing authenticated users access to resources by determining whether they have system access permissions. By giving or denying specific licenses to an authenticated user, authorization enables you to control access privileges.

So, authorization occurs after the system authenticates your identity, granting you complete access to resources such as information, files, databases, funds, places, and anything else. That said, authorization affects your capacity to access the system and the extent to which you can do so.

### JWT Token
JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

JWT.IO allows you to decode, verify and generate JWT.
## Installation
We will use the node package manager to install a few dependencies like express,jsonwebtoken,dotenv.

```
npm i express jsonwebtoken dotenv
```

## Usage
To start the server
```
npm start
```
There are three routes:

 - GET  /api --> This is unprotected route
 - POST /api/login --> This route will generate a token for user Admin, you can decode the token at: https://jwt.io.
- GET /api/protected --> When user passes the token along with `bearer` {token} in Headers and try to access the route user will be able to access the route and user data will be displayed.

| Key             |   Value     | 
| :--------       | :-------    | 
| `Authorization` | `string`    | 


**Note:** This code is for my self learning hence it's really simple so that I can learn the main concept.\
In future this will be implemented to protect the authenticated routes like /register, /signup, /checkout etc.

Thank You\
Happy Coding,\
Learn,Code and Earn\
Stay Safe and Stay Positive :)
