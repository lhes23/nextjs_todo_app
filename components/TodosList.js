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
    <table class="table table-striped table-light table-responsive">
      <thead>
        <tr>
          <th scope="col">Todo ID</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col" colSpan={2}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {todos?.length === 0 ? (
          <p>Loading...</p>
        ) : (
          todos.map((todo) => (
            <tr>
              <th scope="row">{todo._id}</th>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <button
                  onClick={() =>
                    editTodoHandler(todo._id, todo.title, todo.description)
                  }
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteTodoHandler(todo._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
export default TodosList;
