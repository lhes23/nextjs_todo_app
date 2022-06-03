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
    await Todo.create({ title, description });
    const todos = await Todo.find({});
    return res.status(201).json({ todos });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { _id, title, description } = req.body;
    await Todo.findByIdAndUpdate({ _id }, { title, description });
    const todos = await Todo.find({});
    return res.status(201).json({ todos });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    await Todo.findByIdAndDelete({ _id });
    const todos = await Todo.find({});
    return res.status(201).json({ todos });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const getTodoDetail = async (req, res) => {
  try {
    const _id = req.query.id;
    // const todoDetail = await Todo.findById({ _id });
    const todo = await Todo.findById(_id);
    return res.status(201).json({ todo });
  } catch (error) {
    return res.status(401).json({ error });
  }
};
