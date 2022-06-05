import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../../components/addTodoForm";

const TodoDetails = ({ todo }) => {
  const { _id, title, description } = todo;
  const dispatch = useDispatch();

  const editTodoHandler = (_id, title, description) => {
    dispatch(setTodoId(_id));
    dispatch(setTitle(title));
    dispatch(setDescription(description));
    dispatch(setForUpdate(true));
  };

  const deleteTodoHandler = async (_id) => {
    const res = await fetch(`http://localhost:3000/api/todo/${_id}`, {
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

  const router = useRouter();
  const refreshData = () => {
    router.replace("/");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6 my-5">
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link href="/">
                <a className="btn btn-primary px-5 mx-1">Home</a>
              </Link>
              <button
                className="btn btn-warning px-5 mx-1"
                onClick={() => {
                  editHandler(_id);
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
        <div className="col-6 m-5">
          {/* {onEdit && (
                <AddTodoForm
                  todo_api_url={`http://localhost:3000/api/todo/${_id}`}
                  title={title}
                  description={description}
                  setTitle={setTitle}
                  setDescription={setDescription}
                  refreshData={refreshData}
                  forUpdate={forUpdate}
                  todoId={_id}
                />
              )} */}
        </div>
      </div>
    </>
  );
};

TodoDetails.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(`http://localhost:3000/api/todo/${id}`);
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
