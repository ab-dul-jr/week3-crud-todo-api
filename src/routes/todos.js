const express = require('express');
const router = express.Router();
const {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    getActiveTodos
} = require('../controllers/todosController');

router.get('/', getAllTodos);
router.get('/active', getActiveTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
