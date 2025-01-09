import NextImage from "next/image";
// Styles
import styles from "./back-image.module.css";

import type { JSX } from "react";

function BackImage(): JSX.Element {
  return (
    <div className={styles.container}>
      <NextImage priority fill src="/images/eclipse.jpg" alt="background" />
    </div>
  );
}
export default BackImage;
