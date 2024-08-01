import styles from "./todolist.module.css";
import Todoitem from "./Todoitem";
export default function Todolist({ tasks ,setTasks}) {
  return (
    <div className={styles.list}>
      {tasks.map((item) => (
        <Todoitem key={item} item={item} setTasks={setTasks} tasks={tasks} />
      ))}
    </div>
  );
}
