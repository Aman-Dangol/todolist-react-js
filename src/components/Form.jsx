import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  console.log("asdasd", tasks);
  return (
    <div>
      <form className={styles.todoform} onSubmit={(e) => submit(e)}>
       <div></div>
        <input className={styles.modernInput} placeholder="enter task" type="text" value={task} onChange={(e) => inputData(e)} />
        <button className={styles.modernButton}>add</button>
      </form>
    </div>
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
