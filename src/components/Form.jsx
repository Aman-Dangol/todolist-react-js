import { useState } from "react";
export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  console.log("asdasd", tasks);
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input type="text" value={task} onChange={(e) => inputData(e)} />
        <button>add</button>
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
