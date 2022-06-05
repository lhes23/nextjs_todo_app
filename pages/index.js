import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [forUpdate, setForUpdate] = useState(false);
  const [todoId, setTodoId] = useState("");

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <div className="container">
      <div className={`row ${styles.main}`}>
        <div className="d-flex justify-content-center">
          <h1>NextJS Todo App</h1>
        </div>
        <AddTodoForm refreshData={refreshData} />
        <TodosList todos={todos} refreshData={refreshData} />
      </div>
    </div>
  );
}
