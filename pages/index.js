import { useState } from "react";
import AddTodoForm from "../components/addTodoForm";
import Layout from "../components/Layout";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/todo");
  const data = await res.json();
  return {
    props: {
      todos: data.todos,
    },
  };
}

export default function Home({ todos }) {
  return (
    <Layout>
      <AddTodoForm />
      {todos?.length === 0 ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo) => (
          <div key={todo._id}>
            {todo.title} - {todo.description}
          </div>
        ))
      )}
    </Layout>
  );
}
