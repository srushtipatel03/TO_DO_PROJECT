import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/todo/get-tasks",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTaskFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(
          "http://localhost:5000/api/todo/add-task",
          {
            ...values,
            userId: JSON.parse(
              atob(localStorage.getItem("token").split(".")[1])
            ).userId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        fetchTasks();
        resetForm();
      } catch (error) {
        console.error("Error adding task:", error);
      }
    },
  });

  const updateTaskFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.put(
          `http://localhost:5000/api/todo/update-task/${editTaskId}`,
          {
            ...values,
            userId: JSON.parse(
              atob(localStorage.getItem("token").split(".")[1])
            ).userId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        fetchTasks();
        setEditTaskId(null);
        resetForm();
      } catch (error) {
        console.error("Error updating task:", error);
      }
    },
  });

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/delete-task/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const startEditTask = (task) => {
    setEditTaskId(task._id);
    updateTaskFormik.setValues({
      title: task.title,
      description: task.description,
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Your To-Do List Here...</h1>

      <form
        onSubmit={
          editTaskId
            ? updateTaskFormik.handleSubmit
            : addTaskFormik.handleSubmit
        }
        className="mb-4"
      >
        <div className="mb-2">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={
              editTaskId
                ? updateTaskFormik.handleChange
                : addTaskFormik.handleChange
            }
            onBlur={
              editTaskId
                ? updateTaskFormik.handleBlur
                : addTaskFormik.handleBlur
            }
            value={
              editTaskId
                ? updateTaskFormik.values.title
                : addTaskFormik.values.title
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {(editTaskId
            ? updateTaskFormik.touched.title && updateTaskFormik.errors.title
            : addTaskFormik.touched.title && addTaskFormik.errors.title) && (
            <div className="text-red-500 text-sm mt-1">
              {editTaskId
                ? updateTaskFormik.errors.title
                : addTaskFormik.errors.title}
            </div>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={
              editTaskId
                ? updateTaskFormik.handleChange
                : addTaskFormik.handleChange
            }
            onBlur={
              editTaskId
                ? updateTaskFormik.handleBlur
                : addTaskFormik.handleBlur
            }
            value={
              editTaskId
                ? updateTaskFormik.values.description
                : addTaskFormik.values.description
            }
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {(editTaskId
            ? updateTaskFormik.touched.description &&
              updateTaskFormik.errors.description
            : addTaskFormik.touched.description &&
              addTaskFormik.errors.description) && (
            <div className="text-red-500 text-sm mt-1">
              {editTaskId
                ? updateTaskFormik.errors.description
                : addTaskFormik.errors.description}
            </div>
          )}
        </div>
        <button
          type="submit"
          className={`py-2 px-4 rounded text-white focus:outline-none ${
            editTaskId
              ? "bg-green-500 hover:bg-green-700 focus:ring-green-500"
              : "bg-purple-300 hover:bg-purple-700 focus:ring-blue-500"
          }`}
        >
          {editTaskId ? "Update Task" : "Add Task"}
        </button>
      </form>

      <ul>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task._id}
              className="mb-4 p-4 border border-gray-300 rounded-md"
            >
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <div className="mt-4">
                <button
                  onClick={() => startEditTask(task)}
                  className="w-[200px] bg-purple-300 text-black py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="w-[200px] bg-yellow-300 text-black py-2 px-4 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default Task;
