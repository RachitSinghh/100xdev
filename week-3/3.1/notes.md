# Middlewares and global catches


## Middlewares

**Definition:**
Middleware is a function that sits between the incoming request and the final route handler in web applications. It processes requests, performs operations (like authentication, logging, data validation), and can either pass control to the next middleware or send a response back.

Think of it like a bouncer at a club - it checks requests before they reach the main handler, and decides whether to let them through or stop them.

**Simple Example:**
```js
const express = require('express')

const app = express()

app.get('/health-checkup', function(req,res) =>{
    res.send("Your heart is healthy");
})

```



### **Global Catches** helps you give the user a Better error message 

Error-Handling MiddleWare: This is a special type of middleware function in Express that has four arguements instead of of three (`(err, req, res, next)`). Express recognizes it as an Error-handling middleware because of these four arguments 


### **ZOD**
for input validation

**Definition:**
Zod is a TypeScript-first schema validation library that allows you to build schemas and validate data at runtime. It provides a simple, chainable API for defining validation rules and automatically infers TypeScript types from your schemas.

**Simple Example:**
```js
const { z } = require('zod');

const userSchema = z.object({
    email: z.string().email(),
    age: z.number().min(18),
    name: z.string()
});

const result = userSchema.parse({
    email: "user@example.com",
    age: 25,
    name: "John"
});
```

**Why use Zod with Express:**
- Validates request body data before it reaches route handlers
- Provides clear error messages for invalid input
- Works seamlessly with middleware to catch validation errors before processing


### Authentication

**Definition:**
Authentication is the process of verifying the identity of a user. It confirms that a user is who they claim to be by validating credentials (like username/password, tokens, or API keys).

**Common Authentication Methods:**
- **Username/Password:** Traditional login with credentials
- **JWT (JSON Web Tokens):** Stateless token-based authentication
- **OAuth:** Third-party authentication (Google, GitHub login)
- **API Keys:** Simple token-based access for APIs

**JWT Authentication Flow:**
1. User logs in with credentials
2. Server validates and generates a JWT token
3. Client stores the token and sends it in request headers
4. Server verifies the token before processing requests

**Simple JWT Example:**
```js
const jwt = require('jsonwebtoken');

// Create token
const token = jwt.sign({ userId: 1 }, 'secret-key');

// Verify token
const decoded = jwt.verify(token, 'secret-key');
```

**Authentication Middleware:**
```js
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send("No token");
    
    try {
        const user = jwt.verify(token, 'secret-key');
        req.user = user;
        next();
    } catch {
        res.status(403).send("Invalid token");
    }
}
```

**Why Authentication Matters:**
- Protects sensitive user data
- Ensures authorized access to resources
- Prevents unauthorized actions
