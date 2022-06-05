import Link from "next/link";
import { useRouter } from "next/router";

import AddTodoForm from "../components/AddTodoForm";
import TodosList from "../components/TodosList";

import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://nextjs-todo-app-lhes23.vercel.app";
  const res = await fetch(`${baseUrl}/api/todo`);
  const data = await res.json();
  return {
    props: {
      todos: data.todos,
    },
  };
}

export default function Home({ todos }) {
  const router = useRouter();

  const refreshData = () => {
    console.log("refresh");
    router.replace(router.asPath);
  };
  return (
    <div className="container">
      <div className={`row ${styles.main}`}>
        <div className="d-flex justify-content-center">
          <h1>NextJS Todo App!</h1>
        </div>
        <div className="col-md col-lg-6">
          <AddTodoForm refreshData={refreshData} />
        </div>
        <div className="col-md col-lg-6">
          <TodosList todos={todos} />
        </div>
      </div>
    </div>
  );
}
