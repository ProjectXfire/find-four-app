"use client";

import styles from "./header.module.css";

import { useRef, type JSX } from "react";

interface Props {
  title: string[];
  delay?: number;
}

function Header({ title, delay = 0 }: Props): JSX.Element {
  const titleParts = title.map((item) => item.split(""));
  let counterRef = useRef(0).current;

  return (
    <div className={styles.header}>
      {titleParts.map((word, i) => (
        <div key={i} className={styles["header-block"]}>
          {word.map((letter, k) => {
            counterRef = counterRef + 1;
            return (
              <span key={k} style={{ animationDelay: `${delay + counterRef / 10}s` }}>
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
export default Header;
