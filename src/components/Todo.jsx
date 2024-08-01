import Form from "./Form";
import { useState } from "react";
import Todolist from "./Todolist";
import Footer from "./footer";
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const total = tasks.length;
  const completed = tasks.filter((item) => item.done == true).length;
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <Todolist tasks={tasks} setTasks={setTasks} />
      <Footer completed={completed} total={total}></Footer>
    </div>
  );
}
