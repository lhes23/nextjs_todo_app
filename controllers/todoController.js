import dbConnect from "../utils/dbConnect";
import Todo from "../models/todoModel";

dbConnect();

export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todos = await Todo.create({ title, description });
    return res.status(201).json({ todos });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const updateTodo = async (req, res) => {};

export const deleteTodo = async (req, res) => {};
