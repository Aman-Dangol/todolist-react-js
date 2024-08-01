import { useState } from "react";
import Todoitem from "./Todoitem";
export default function Form() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <form onSubmit={(e) => submit(e)}>
      <input type="text" value={task} onChange={(e) => inputData(e)} />
      <button>add</button>
      {tasks.map((item) => (
        <Todoitem key={item} item={item} />
      ))}
    </form>
  );

  function inputData(e) {
    setTask(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }
}
