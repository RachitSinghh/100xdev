const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const store = "./db";

const todos = [
  {
    id: 1,
    title: "Express Project",
    description: "complete the express project any how",
  },
];
app.get("/todos", (req, res) => {
  res.send(todos);
});

app.get("/todos/:id", (req, res) => {
  const Todoid = req.params.id;

  const task = todos.find((i) => i.id === Number(Todoid));

  if (!task) {
    return res.status(404).json({ message: "couldn't find specific task" });
  }
  res.send(task);
});

// this request should create a todo item
//
app.post("/todos", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(401).json("Title is required");
  }

  if (!description) {
    return res.status(401).json("description is required");
  }
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
  };

  todos.push(newTodo);
  res
    .status(201)
    .json({ message: "Created with the ID Of the created todo item in JSON" });
});

// update item
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  // find todo by id
  const todo = todos.find((t) => t.id === Number(id));

  // if not found return 401;
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  // update the fields
  todo.title = title;
  todo.description = description;
  todo.completed = completed;

  res.status(201).json(todo);
});

// delete the item
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex((t) => t.id === Number(id));

  // if not found return 404
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  // remove it from the array
  todos.splice(index, 1); // only splice when item is found
  // 2nd parameter means remove one item only

  res.status(200).json({ message: "Todo deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
});
