import Form from "./Form";
import { useState } from "react";
import Todolist from "./Todolist";
import Footer from "./footer";
export default function Todo() {
  const storage = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(storage ? storage : []);
  const total = tasks.length;
  const completed = tasks.filter((item) => item.done == true).length;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <Todolist tasks={tasks} setTasks={setTasks} />
      <Footer completed={completed} total={total}></Footer>
    </div>
  );
}
