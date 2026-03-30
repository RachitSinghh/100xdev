const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
    for (const user of ALL_USERS) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    /**
     * Verifies a JWT token using the provided secret key
     * @param {string} token - The JWT token to verify
     * @param {string} jwtPassword - The secret key/password used to sign and verify the JWT token
     * @returns {object} The decoded payload of the token if verification is successful
     * @throws {Error} Throws an error if the token is invalid, expired, or doesn't match the secret key
     */
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
  res.json({
    users: ALL_USERS.filter((value) =>{
        if(value.username === username){
            return false; 
        }else{
            return true; 
            
        }
    })
  })
});

app.listen(3000)