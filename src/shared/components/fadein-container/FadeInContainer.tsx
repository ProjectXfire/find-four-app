import styles from "./Styles.module.css";

interface Props {
  children: React.ReactNode;
}

function FadeInContainer({ children }: Props): React.ReactElement {
  return <div className={styles.container}>{children}</div>;
}
export default FadeInContainer;
