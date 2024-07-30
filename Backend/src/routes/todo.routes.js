const express = require("express");
const toDoRoutes = express.Router();
const { userVerifyToken } = require("../helpers/verifyToken");
const {
  addNewTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require("../controller/todo.controller");

toDoRoutes.post("/add-task", userVerifyToken, addNewTask);
toDoRoutes.put("/update-task/:taskId", userVerifyToken, updateTask);
toDoRoutes.delete("/delete-task/:taskId", userVerifyToken, deleteTask);
toDoRoutes.get("/get-tasks", userVerifyToken, getAllTasks);

module.exports = toDoRoutes;
