import { useState } from "react";

const AddTodoForm = ({
  todo_api_url,
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  refreshData,
}) => {
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(todo_api_url, {
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
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
export default AddTodoForm;
