import { motion } from "framer-motion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setDescription,
  setTodoId,
  setForUpdate,
} from "../slices/todoSlice";

const TodosList = ({ todos, refreshData }) => {
  const dispatch = useDispatch();
  const todoApiUrl = useSelector((state) => state.todo.todoApiUrl);

  const editTodoHandler = (_id, title, description) => {
    dispatch(setTodoId(_id));
    dispatch(setTitle(title));
    dispatch(setDescription(description));
    dispatch(setForUpdate(true));
  };
  const deleteTodoHandler = async (_id) => {
    const res = await fetch(todoApiUrl, {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status < 300) {
      refreshData();
    }
  };
  return (
    <div className="col-6">
      <table className="table table-striped table-light table-responsive my-4">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {todos?.length === 0 ? (
            <p>Loading...</p>
          ) : (
            todos.map((todo, i) => (
              <Link href={`/todo/${todo._id}`} key={todo._id}>
                <motion.tr
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.1,
                    },
                  }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.2,
                        delay: i * 0.3,
                      },
                    },
                  }}
                >
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                </motion.tr>
              </Link>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TodosList;
