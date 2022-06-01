import dbConnect from "../../../utils/dbConnect";
import { deleteTodo, updateTodo } from "../../../controllers/todoController";

dbConnect();

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "DELETE":
      await deleteTodo(req, res);
      break;
    case "PUT":
      await updateTodo(req, res);
      break;
    default:
      res.status(400).json({ error: "error" });
  }
};

export default handler;
