const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// function oldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;

  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry you're not of age yet",
    });
  }
}
// app.get("/ride1", (req, res) => {
//   if (oldEnough(req.query.age)) {
//     res.json({
//       msg: "You have successfully riden the ride 1",
//     });
//   } else {
//     res.status(411).json({
//       msg: "Sorry you're not of age yet",
//     });
//   }
// });

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
