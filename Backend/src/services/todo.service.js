const ToDo = require('../model/todo.model');

module.exports = class toDoServices {

    // Add New ToDo
    async addNewTask(body) {
        try {
            return await ToDo.create(body);
        } catch (error) {
            console.log('Error adding new task:', error);
            throw error; 
        }
    }

    // Update Task
    async updateTask(taskId, body) {
        try {
            return await ToDo.findByIdAndUpdate(taskId, body, { new: true });
        } catch (error) {
            console.log('Error updating task:', error);
            throw error; 
        }
    }

    // Delete Task
    async deleteTask(taskId) {
        try {
            return await ToDo.findByIdAndUpdate(taskId, { isDeleted: true }, { new: true });
        } catch (error) {
            console.log('Error deleting task:', error);
            throw error; 
        }
    }

    // Get All Tasks
    async getAllTasks(userId) {
        try {
            return await ToDo.find({ userId, isDeleted: false });
        } catch (error) {
            console.log('Error retrieving tasks:', error);
            throw error; 
        }
    }
};
