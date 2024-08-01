import styles from "./todoitem.module.css";
export default function Todoitem({ item, tasks, setTasks }) {
  function handleDelete(item) {
    setTasks(tasks.filter((deleteItem) => item != deleteItem));
  }
  function toggle(item) {
    setTasks(
      tasks.map((task) => {
        if (task.name == item.name) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span
          className={className}
          onClick={() => {
            toggle(item);
          }}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => {
              handleDelete(item);
            }}
            className={styles.deletebtn}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
