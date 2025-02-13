const express = require('express');
const Todo = require('../models/Todo'); // Import Todo database model

const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new todo
router.post('/', async (req, res) => {
    const { content, checked } = req.body;

    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }

    const newTodo = new Todo({ content, checked });

    try {
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete all todos
router.delete('/', async (req, res) => {
    try {
        await Todo.deleteMany({});
        res.json({ message: 'All todos deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Toggle todo checked status
router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.checked = !todo.checked;
        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;