import styles from "./container.module.css";

import type { JSX } from "react";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props): JSX.Element {
  return <main className={styles.container}>{children}</main>;
}
export default Container;
