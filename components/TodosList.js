import { motion } from "framer-motion";
import Link from "next/link";

const TodosList = ({ todos }) => {
  return (
    <div className="col-12">
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
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
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
