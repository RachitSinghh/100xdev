# Middleware 

## Using Middlware 
Expresss is a routing middlware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls 

***Middlware*** functions are functions that have access to the *request object* (req), the *response object*(res), and the next middlware funciton in the application's request-response cycle.The next middleware function is commonly denoted by a variable named next 

Middleware functions can perform the following tasks 

- Execute any code 
- Make changes to the request and the response objects
- End the request-response cycle 
- Call the next middlware function in the stack 

