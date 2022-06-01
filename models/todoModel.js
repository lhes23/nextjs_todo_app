import { Schema, models, model } from "mongoose";

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
});

const Todo = models?.Todo || model("Todo", TodoSchema);

export default Todo;
