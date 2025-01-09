import NextLink from "next/link";
// Styles
import styles from "./start.module.css";

function Start() {
  return (
    <section className={styles.container}>
      <p className={styles.text}>Start playing</p>
      <NextLink href="/board" className={styles.start}>
        Start
      </NextLink>
    </section>
  );
}
export default Start;
