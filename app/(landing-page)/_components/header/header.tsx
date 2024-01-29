import styles from "./header.module.css";

function Header(): JSX.Element {
  return (
    <h1 className={`${styles["animate-text"]} ${styles.header}`}>
      <span>F</span>
      <span>i</span>
      <span>n</span>
      <span className={styles["text-with-spacer"]}>d</span>
      <span>F</span>
      <span>o</span>
      <span>u</span>
      <span className={styles["text-with-spacer"]}>r</span>
      <span>A</span>
      <span>p</span>
      <span>p</span>
    </h1>
  );
}
export default Header;
