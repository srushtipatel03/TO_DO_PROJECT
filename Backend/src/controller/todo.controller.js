const toDoServices = require('../services/todo.service');
const toDoService = new toDoServices();

exports.addNewTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user._id;

        if (!title) {
            return res.status(400).json({ message: 'Title is required.' });
        }

        const newTask = await toDoService.addNewTask({ userId, title, description });
        res.status(201).json({ newTask, message: 'Task added successfully' });
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { title, description, completed } = req.body;
        const userId = req.user._id;

        let task = await toDoService.updateTask(taskId, { title, description, completed });
        res.status(200).json({ task, message: 'Task updated successfully' });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const userId = req.user._id;

        let task = await toDoService.deleteTask(taskId);
        res.status(200).json({ task, message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const userId = req.user._id;
        const tasks = await toDoService.getAllTasks(userId);
        res.status(200).json({ tasks, message: 'Tasks retrieved successfully' });
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
