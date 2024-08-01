import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState({
    name: "",
    done: false,
  });
  return (
    <div>
      <form className={styles.todoform} onSubmit={(e) => submit(e)}>
        <div></div>
        <input
          className={styles.modernInput}
          placeholder="enter task"
          type="text"
          value={task.name}
          onChange={(e) => inputData(e)}
        />
        <button className={styles.modernButton}>add</button>
      </form>
    </div>
  );

  function inputData(e) {
    setTask({
      name: e.target.value,
      done: false,
    });
  }
  function submit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ name: "", done: false });
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(task));
  }
}
