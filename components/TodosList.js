const TodosList = ({ todos }) => {
  const deleteTodoHandler = async (_id) => {
    await fetch("api/todo/", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
