import { useState } from "react";
import { useRouter } from "next/router";

import AddTodoForm from "../components/addTodoForm";
import TodosList from "../components/TodosList";

import styles from "../styles/Home.module.css";

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
  const [forUpdate, setForUpdate] = useState(false);
  const [todoId, setTodoId] = useState("");

  const router = useRouter();

  const refreshData = () => {
    console.log(router.asPath);
    router.replace(router.asPath);
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <AddTodoForm
          todo_api_url={todo_api_url}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          refreshData={refreshData}
          forUpdate={forUpdate}
          todoId={todoId}
        />
        <TodosList
          todos={todos}
          todo_api_url={todo_api_url}
          setTitle={setTitle}
          setDescription={setDescription}
          refreshData={refreshData}
          setForUpdate={setForUpdate}
          setTodoId={setTodoId}
        />
      </div>
    </div>
  );
}
