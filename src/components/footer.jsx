import styles from "./footer.module.css";

export default function Footer({ completed ,total}) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed : {completed}</span>
      <span className={styles.item}>total : {total}</span>
    </div>
  );
}
