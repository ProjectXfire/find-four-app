import React, { FC } from "react";
// Styles
import styles from "../styles/Title.module.scss";

interface Props {
  title: string;
  size?: "small" | "normal" | "large";
}

export const Title: FC<Props> = ({ title, size = "normal" }) => {
  const sizeStyle = {
    small: "title--small",
    normal: "title--normal",
    large: "title--large",
  };

  return (
    <p className={`${styles.title} ${styles[sizeStyle[size]]}`}>{title}</p>
  );
};
