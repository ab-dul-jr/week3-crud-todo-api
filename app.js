require("dotenv").config()

const express = require('express');

const app = express();

//body parsing middleware
app.use(express.json());

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build CRUD API', completed: false }
];

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.post('/todos', (req, res) => {
    res.send("Todo created");
});
app.post('/todos', (req, res) => {
    res.send("Todo created");
   const newTodo = { id: todos.length + 1, ...req.body};           
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
 module.exports = app;

 // PATCH Update - Partial
app.patch("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));   // Array.find()
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    Object.assign(todo, req.body);    // Merge, e.g., {completed: true}
    res.status(200).json(todo);
});

// DELETE Remove
app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = todos.length;
    todos = todos.filter(t => t.id !== id);   // Array.filter() — non-destructive
    if (todos.length === initialLength) return res.status(404).json({ error: "Not found" });
    res.status(204).send(); // Silent success
});

app.use((err, req, res, next) => {
    res.status(500).json({error: 'server error:' });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening on Port ${PORT}`);
});