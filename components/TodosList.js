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
    console.log(_id, title, description);
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
    <>
      {todos?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo) => (
          <div key={todo._id}>
            {todo.title} - {todo.description} -{" "}
            <button
              onClick={() =>
                editTodoHandler(todo._id, todo.title, todo.description)
              }
            >
              Edit
            </button>
            <button onClick={() => deleteTodoHandler(todo._id)}>Delete</button>
          </div>
        ))
      )}
    </>
  );
};
export default TodosList;
