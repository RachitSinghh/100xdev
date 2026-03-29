const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
const PORT = 4000;

const todos = [];

app.get("/", (req, res) => {
  res.send("Hello There we're going to play with fileSystem modules now");
});

app.get("/todos", (req, res) => {
  const data = fs.readFileSync("todo.json", "utf-8");
  if (!data) {
    return res.status(404).json({ message: "Couldn't find any data" });
  }
  res.send(JSON.parse(data));
});

// create a todo
app.post("/todos", (req, res) => {
  const { title, description } = req.body;

  if (!title) return res.status(401).json("Title not found");

  if (!description) {
    return res.status(401).json("description not found");
  }

  const data = fs.readFileSync("todo.json", "utf-8");
  const todo = data ? JSON.parse(data) : [];

  const createTodo = {
    id: todo.length + 1,
    title,
    description,
  };

  todo.push(createTodo);

  fs.writeFileSync("todo.json", JSON.stringify(todo));

  res.status(201).json({ message: "Created new Todo" });
});

// update todo;
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  // mylogic
  // read the file
  // parse the data and store it on other variable
  const data = fs.readFileSync("todo.json", "utf-8");
  const task = JSON.parse(data);

  // now that we've read our file we need to find the todo by it's id
  const todo = task.find((t) => t.id === Number(id));
  // error handling
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  // now update the title and it's descirption
  todo.title = title;
  todo.description = description;

  // make changes to the file using writeFileSynce
  fs.writeFileSync("todo.json", JSON.stringify(task));

  // status 200 to update
  res.status(200).json(task);
});

// delete the todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  // read the file
  const data = fs.readFileSync("todo.json", "utf-8");
  // parse the data
  const task = JSON.parse(data);

  const index = task.findIndex((t) => t.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "Couldn't find the Todo" });
  }

  // remove it from the array
  task.splice(index, 1);

  // resassign all the ids after delteion
  const reOrderedTasks = task.map((t, index) => ({
    ...t,
    id: index + 1,
  }));

  fs.writeFileSync("todo.json", JSON.stringify(reOrderedTasks));

  res.status(200).json({ message: "Todo deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`App listening to PORT: ${PORT}`);
});
