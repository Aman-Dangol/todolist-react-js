import styles from "./todolist.module.css";
import Todoitem from "./Todoitem";
export default function Todolist({ tasks, setTasks }) {
  const sorted = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sorted.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </div>
  );
}
