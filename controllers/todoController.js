import dbConnect from "../utils/dbConnect";
import Todo from "../models/todoModel";

export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addTodo = async (req, res) => {};

export const updateTodo = async (req, res) => {};

export const deleteTodo = async (req, res) => {};
