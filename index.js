const express = require('express');
const app = express();
const todoRoutes = require('./src/routes/todos');

app.use(express.json());
app.use('/todos', todoRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
