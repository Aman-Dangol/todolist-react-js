import styles from "./todoitem.module.css";
export default function Todoitem({ item, tasks, setTasks }) {
  function handleDelete(item) {
    setTasks(tasks.filter((deleteItem) => item != deleteItem));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {item}{" "}
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
