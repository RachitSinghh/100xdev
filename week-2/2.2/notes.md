# Node.js runtime | HTTP

## What is ECMAScript: The specification

**ECMA**script is a scripting language specification standardlized by Ecma Interntional in ECMA-262 and ISO/IEC 16262 documents. It serves as the guideline on the 'rules' for scripting language design
**Version** ECMAScript versions(like ES5,ES6/ES2015, ES2017, etc.)are essentially updates to the specification, introduciong new features and syntaxes. For example ES6 Introduced Arrow Functions, classes and template literals

## What is JavaScript: The implementation

**JavaScript**: is a scripting language that conforms to the ECMAScript specification it's the most widely known and used implementation of ECMAScript.
**Beyond ECMAScript**: JavaScript includes additional features that are not part of the ECMAScript specification, which is crucial for web development but is not defined by ECMAScript

## **V8 Engine**: V8 is an open-source javascript engine developed by the chromium project for and chromium web browsers. It's written in C++ and is responsible for comiling JavaScript code into native machine code before executing it, which greatly improves perfomance.

## What is Node.js

- V8 engine added some Backend things (fileSystem reads ) on top to create a new runtime to compete with BE languages like Java.
- JS was never meant to be run in the backend Eventually became very popular and is popular choice of runtime of the backend.

## What can you do with node.js?

- create clis
- create video player
- create a game
- create an **HTTP** server(end goal)

## What is an HTTP server

_The most popular usecase node js gives us to create HTTP server_

**HTTP (Hyper text transfer protocol)**

1. A protocol that is defined for machine to communicate
2. Specifically for website, it is the most common way for your website's frontend to talk to its backend

- In the end, it's the client throwing some information at a server.
- Server doing something with that information
- Server responding back with final result

- Think of them as a function where
- Arguments are something the client sends
- Rather than calling a function body, the server does something with the request
- Rather than the function returing a value, the server responds with some data.

## Things Clients needs to Worry About

### HTTP (client Side)

- **Protocol(HTTP/HTTPs)**:
- Address(URL/IP/PORT)
- Route
- Headers, body, query params
- Method
  do

### client side communication

**https://chat.openai.com/backend-api/conversation**
protocol URL route

Header - cookie - 123as@342345D3Q!E223
Body - What is 2 + 2 (usually in JSON)
Method - Post

### Things that happend in your browser after you fire this request

1. Browser parse the URL
2. Does DNS Lookup (converts google.com to an IP)
3. Establishes a connection to IP (does handshake)

### What is DNS resolution

URLs are just like contact in your phone in the end they map to an IP, If you ever buy an URL of your own, you will need to point it to the IP of your server

### HTTP (server side)

- Response headers
- Response body
- status codes


### Things that happend on the server after the request is recived 
1. you get inputs(route, body, headers)
2. You do some logic on input, calculate the output
3. You return the output body, headers and status code


### What are the common methods you can send to your BE server? 

1. GET
2. POST
3. PUT
4. DELETE

### What are the common status codes the backend responds with? 

1. 200 - Everything is ok
2. 404 - Page / route not found
3. 403 - Authentication issues
4. 500 - Internal server error


### Why do we need status codes? Why can't we just return in the body something like success:true/false

### Why do we need we need so many types of request methods? Why can't just one work

### Why do we need body/headers/query params, why can't just one work 


- These are 