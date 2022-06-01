import dbConnect from "../../../utils/dbConnect";
import { getAllTodo } from "../../../controllers/todoController";

dbConnect();

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      await getAllTodo(req, res);
      break;
    default:
      res.status(400).json({ error: "error" });
  }
};

export default handler;
