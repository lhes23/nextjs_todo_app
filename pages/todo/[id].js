import Link from "next/link";
import { useState } from "react";
import AddTodoForm from "../../components/addTodoForm";

const TodoDetails = ({ todo }) => {
  const { _id, title, description } = todo;
  const [onEdit, setOnEdit] = useState(false);

  const editHandler = (_id) => {
    console.log(_id);
    setOnEdit((prevEdit) => !prevEdit);
  };

  return (
    <div>
      {todo === null ? (
        <p>Loading...</p>
      ) : (
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
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 m-5">
              {onEdit && (
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
              )}
            </div>
          </div>
        </>
      )}
    </div>
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
