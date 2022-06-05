import { getTodoDetail, deleteTodo } from "../../../controllers/todoController";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await getTodoDetail(req, res);
      break;
    case "DELETE":
      await deleteTodo(req, res);
      break;
    default:
      res.json({ success: false });
  }
};

export default handler;
