import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../../components/AddTodoForm";

import {
  setTodoId,
  setTitle,
  setDescription,
  setForUpdate,
} from "../../slices/todoSlice";

const TodoDetails = ({ todo }) => {
  const { _id, title, description } = todo;
  const dispatch = useDispatch();
  const forUpdate = useSelector((state) => state.todo.forUpdate);
  dispatch(setTodoId(_id));
  dispatch(setTitle(title));
  dispatch(setDescription(description));
  const router = useRouter();

  const deleteTodoHandler = async (_id) => {
    const res = await fetch(`/api/todo/${_id}`, {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status < 300) {
      router.replace("/");
      clearData();
    }
  };

  const clearData = () => {
    dispatch(setTodoId(""));
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setForUpdate(false));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-6 my-5">
        <div className="card">
          <div className="card-header">
            <h3>Todo Details</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link href="/">
              <a
                className="btn btn-primary px-5 mx-1"
                onClick={() => {
                  clearData();
                }}
              >
                Home
              </a>
            </Link>
            <button
              className="btn btn-warning px-5 mx-1"
              onClick={() => {
                dispatch(setForUpdate(true));
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger px-5 mx-1"
              onClick={() => {
                deleteTodoHandler(_id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="col-6 m-5">{forUpdate && <AddTodoForm />}</div>
    </div>
  );
};

TodoDetails.getInitialProps = async (ctx) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://nextjs-todo-app-lhes23.vercel.app";
  const { id } = ctx.query;
  const res = await fetch(`${baseUrl}/api/todo/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    todo: data.todo,
  };
};

export default TodoDetails;
