import { motion } from "framer-motion";
import Link from "next/link";

const TodosList = ({
  todos,
  todo_api_url,
  setTitle,
  setDescription,
  refreshData,
  setForUpdate,
  setTodoId,
}) => {
  const editTodoHandler = (_id, title, description) => {
    setTodoId(_id);
    setTitle(title);
    setDescription(description);
    setForUpdate(true);
  };
  const deleteTodoHandler = async (_id) => {
    const res = await fetch(todo_api_url, {
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
    <div className="col-12">
      <table className="table table-striped table-light table-responsive my-4">
        <thead>
          <tr>
            <th scope="col">Todo ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" colSpan={2} className="text-center">
              Actions
            </th>
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
                  <th scope="row">{todo._id}</th>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <button
                      onClick={() =>
                        editTodoHandler(todo._id, todo.title, todo.description)
                      }
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteTodoHandler(todo._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
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
