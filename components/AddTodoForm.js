import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setDescription } from "../slices/todoSlice";

// const AddTodoForm = ({
//   todo_api_url,
//   title,
//   description,
//   setTitle,
//   setDescription,
//   refreshData,
//   forUpdate,
//   todoId,
// }) => {

const AddTodoForm = ({ refreshData }) => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.todo.title);
  const description = useSelector((state) => state.todo.description);
  const forUpdate = useSelector((state) => state.todo.forUpdate);
  const todoApiUrl = useSelector((state) => state.todo.todoApiUrl);
  const todoId = useSelector((state) => state.todo.todoId);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    let res = {};
    if (forUpdate) {
      const _id = todoId;
      res = await fetch(todoApiUrl, {
        method: "PUT",
        body: JSON.stringify({ _id, title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status < 300) {
        dispatch(setTitle(""));
        dispatch(setDescription(""));
        refreshData();
      }
    } else {
      res = await fetch(todoApiUrl, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status < 300) {
        dispatch(setTitle(""));
        dispatch(setDescription(""));
        refreshData();
      }
    }
  };
  return (
    <motion.div
      className={`col-12 d-flex justify-content-center ${styles.formCard}`}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <div className="col-12">
        <form onSubmit={formSubmitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => dispatch(setTitle(e.target.value))}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => dispatch(setDescription(e.target.value))}
              className="form-control"
            />
          </div>

          <button className="btn btn-primary my-4">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};
export default AddTodoForm;
