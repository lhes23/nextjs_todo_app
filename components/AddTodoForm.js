const AddTodoForm = ({
  todo_api_url,
  title,
  description,
  setTitle,
  setDescription,
  refreshData,
  forUpdate,
  todoId,
}) => {
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let res = {};
    if (forUpdate) {
      const _id = todoId;
      res = await fetch(todo_api_url, {
        method: "PUT",
        body: JSON.stringify({ _id, title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status < 300) {
        setTitle("");
        setDescription("");
        refreshData();
      }
    } else {
      res = await fetch(todo_api_url, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status < 300) {
        setTitle("");
        setDescription("");
        refreshData();
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="col-6">
        <form onSubmit={formSubmitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
            />
          </div>

          <button className="btn btn-primary my-4">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddTodoForm;
