import React, { FC } from "react";
// Styles
import styles from "./title.module.css";

interface Props {
  title: string;
  size?: "small" | "normal" | "large";
  color?: string;
}

const Title: FC<Props> = ({ title, size = "normal", color = "black" }) => {
  const sizeStyle = {
    small: "title--small",
    normal: "title--normal",
    large: "title--large",
  };

  return (
    <p
      style={{ color }}
      className={`${styles.title} ${styles[sizeStyle[size]]}`}
    >
      {title}
    </p>
  );
};

export default Title;
