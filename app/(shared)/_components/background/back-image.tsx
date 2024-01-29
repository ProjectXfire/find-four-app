import NextImage from "next/image";
// Styles
import styles from "./back-image.module.css";

function BackImage(): JSX.Element {
  return (
    <div className={styles.container}>
      <NextImage priority fill src="/images/eclipse.jpg" alt="background" />
    </div>
  );
}
export default BackImage;
