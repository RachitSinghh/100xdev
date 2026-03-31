# Authentication 

## Bank Example

1. **Sign-in credential**: Something the bank provides on your first visit (like an account number or ID)
2. **Secure token**: Something you must keep safe - if you lose a check, someone could potentially use it to debit your account
3. **Verification mechanism**: Even though others can see your signature or check appearance, the bank can detect forgeries through security features

## JSON Web Token 

- **Definition**: JSON web tokens (JWT) work like bank checks - they serve as proof of authentication
- **Issuance**: The backend issues JWTs when you successfully sign in
- **Security**: While anyone can create a similar-looking token, the backend will reject it because it lacks proper cryptographic signatures
- **Token loss risk**: If you lose your original JWT, an attacker can potentially use it to impersonate you until it expires


## Authentication Flow with JWT

```
User Login
    ↓
Backend validates credentials
    ↓
Backend generates JWT (with cryptographic signature)
    ↓
JWT sent to client
    ↓
Client stores JWT (localStorage/cookie)
    ↓
Client sends JWT with subsequent requests
    ↓
Backend verifies JWT signature
    ↓
Access granted/denied based on validity
    ↓
JWT expires → User must re-authenticate
```

### JWT
1. generate 
2. decode 
3. verifying 