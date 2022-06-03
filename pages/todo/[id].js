import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TodoDetails = () => {
  const [todo, setTodo] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/todo/${id}`);
      const data = await res.json();
      setTodo(data.todo);
    };
    fetchData();
  }, []);

  return (
    <div>
      {todo.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <Link href="/">Home</Link>
        </>
      )}
    </div>
  );
};
export default TodoDetails;
