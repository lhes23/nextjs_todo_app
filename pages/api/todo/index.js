import dbConnect from "../../../utils/dbConnect";
import { getAllTodo, addTodo } from "../../../controllers/todoController";

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await getAllTodo(req, res);
      break;
    case "POST":
      await addTodo(req, res);
      break;
    default:
      res.status(400).json({ error: "error" });
  }
};

export default handler;
