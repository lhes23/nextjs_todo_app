import { useRouter } from "next/router";
import { useEffect } from "react";

const TodoDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/todo/${id}`);
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>{title}</h1>
      <h2>{description}</h2> */}
    </div>
  );
};
export default TodoDetails;
