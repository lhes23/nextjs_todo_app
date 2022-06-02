const TodosList = ({ todos, todo_api_url, refreshData }) => {
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
            <button onClick={() => deleteTodoHandler(todo._id)}>Delete</button>
          </div>
        ))
      )}
    </>
  );
};
export default TodosList;
