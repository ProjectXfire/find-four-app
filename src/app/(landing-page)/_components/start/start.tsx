import NextLink from "next/link";
// Styles
import styles from "./start.module.css";

interface Props {
  delay?: number;
}

function Start({ delay = 0 }: Props): React.ReactElement {
  return (
    <section className={styles.container}>
      <NextLink href="/board" className={styles.start} style={{ animationDelay: `${delay}s` }}>
        Start playing
      </NextLink>
    </section>
  );
}
export default Start;
