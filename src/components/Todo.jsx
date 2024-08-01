import Form from "./Form";
import { useState } from "react";
import Todolist from "./Todolist";
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <Todolist tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
