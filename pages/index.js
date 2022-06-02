import { useState } from "react";
import { useRouter } from "next/router";

import AddTodoForm from "../components/addTodoForm";
import Layout from "../components/Layout";
import TodosList from "../components/TodosList";

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
  const todo_api_url = "http://localhost:3000/api/todo";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const refreshData = () => {
    console.log(router.asPath);
    router.replace(router.asPath);
  };
  return (
    <Layout>
      <AddTodoForm
        todo_api_url={todo_api_url}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        refreshData={refreshData}
      />
      <TodosList
        todos={todos}
        todo_api_url={todo_api_url}
        refreshData={refreshData}
      />
    </Layout>
  );
}
