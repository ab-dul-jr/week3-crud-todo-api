let todos = [];

exports.getAllTodos = (req, res) => {
    res.json(todos);
};

exports.getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    res.json(todo);
};

exports.createTodo = (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ error: "Task field is required" });
    }

    const newTodo = {
        id: todos.length + 1,
        task,
        completed: false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    const { task, completed } = req.body;
    if (task !== undefined) todo.task = task;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
};

exports.deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: "Todo deleted successfully" });
};

exports.getActiveTodos = (req, res) => {
    const active = todos.filter(t => !t.completed);
    res.json(active);
};
