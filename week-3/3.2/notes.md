# Fetch Authentication and Database.

## Fetch API

The Fetch API is a modern JavaScript interface for making HTTP requests to retrieve resources from servers. It provides a promise-based approach to network requests, replacing the older XMLHttpRequest method.

### Key Features

- **Promise-based**: Returns a Promise that resolves with the Response object
- **Simpler syntax**: Cleaner and more readable than XMLHttpRequest
- **Flexible**: Supports various HTTP methods (GET, POST, PUT, DELETE, etc.)
- **Request/Response objects**: Standardized way to handle HTTP communication

### Basic Syntax

```javascript
fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### Common Parameters

- `url`: The resource endpoint to fetch
- `options`: Configuration object (method, headers, body, credentials, etc.)

### Response Methods

- `response.json()`: Parse response as JSON
- `response.text()`: Get response as plain text
- `response.blob()`: Get response as binary data
- `response.ok`: Boolean indicating success (200-299 status)

## Authentication

1. Hashing
2. Encryption
3. JSON web tokens
4. Local storage

### Hashing

- One-way function that converts input to a fixed-length string
- Same input always produces same hash
- Changing the input a little bit changes the output by a lot
- Example: `bcrypt.hash('password')` → produces irreversible hash
- Use case: Securely store passwords in databases

### Encryption

/\*\*

- Reversible Cryptographic Process
-
- A reversible process that uses cryptographic keys to securely encode and decode data.
-
- @encoding - The process of converting plaintext data into ciphertext using a secret key.
-            This transforms readable information into an encrypted format that cannot be
-            easily understood without the corresponding decryption key.
-
- @decoding - The process of converting ciphertext back into plaintext using the correct key.
-            This reverses the encoding operation, recovering the original data from its
-            encrypted form.
-
- Key characteristics:
- - Bidirectional: Data can be transformed and then restored to its original state
- - Key-dependent: The same key is required for both encoding and decoding operations
- - Symmetric encryption: Typically uses the same key for both operations
- - Data integrity: Original data can be completely recovered without loss of information
    \*/

* Reversible process using keys to encode/decode data
* Requires both encryption and decryption keys
* Example: `AES-256` encryption for sensitive data
* Use case: Protect data in transit and at rest

### JSON Web Tokens (JWT)

- Compact, self-contained token format: `header.payload.signature`
- It's neither of encryption or hashing (it's technically a digital signature)
- signature can be verified only using the password
- Contains encoded user information and claims
- Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- Use case: Stateless authentication and authorization

### Local Storage

- Browser API to store key-value pairs persistently
- Data persists across browser sessions
-
- Example: `localStorage.setItem('token', jwtToken)`
- Use case: Store authentication tokens client-side for subsequent requests
- Note: Not secure for sensitive data; use with caution

## Introduction to Database.

Until now we've been storing data in memory. This is bad for few reason

1. Data can't be dynamic, if you update in memory objects, the updates are lost if the process restarts
2. There are multiple servers in the real world

- In the real world, a basic architecture looks like this

* user hits the backend
* Backend hits the database
* User doesn't have access to the database/ can't talk to the DB.

1. Brower -> [ Backend -> Databse ]
2. Brower <- [ Backend <- Databse ]

### There are various types of DATABASES 
1. Graph DBs 
2. Vector DBs
3. SQL DBs
4. NoSql DBs

### NoSql DB(Mongo DB)

- Let's you create Database 
- In each Database, it lets you create tables(collection)   
- In each Table, it lets you jump JSON data
- It is schemaless
- It scales well and is a decent choice for most use cases 

 #### How does the backend connect to the Database using libraries

 1. Express lets you create an HTTP server
 2. Jsonwebtokens library lets you create jets
 3. Mongoose lets you connect to your database 

 