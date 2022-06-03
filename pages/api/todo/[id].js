import { getTodoDetail } from "../../../controllers/todoController";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

const handler = async (req, res) => {
  await getTodoDetail(req, res);
};

export default handler;
