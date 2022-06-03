import dbConnect from "../../../utils/dbConnect";
import {
  getAllTodo,
  addTodo,
  deleteTodo,
  updateTodo,
  getTodoDetail,
} from "../../../controllers/todoController";

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      if (req.query) {
        // console.log(req.query);
        await getTodoDetail(req, res);
        break;
      }
      await getAllTodo(req, res);
      break;
    case "POST":
      await addTodo(req, res);
      break;
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
