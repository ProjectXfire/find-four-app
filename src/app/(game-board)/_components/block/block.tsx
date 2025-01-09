"use client";

import { useContext } from "react";
// Context
import { BoardContext } from "../../_states/board-context/BoardContext";
// Styles
import styles from "./block.module.css";

interface Props {
  block: [number, number];
}

export default function BoardItem({ block }: Props): React.ReactElement {
  const {
    state: { board },
  } = useContext(BoardContext);

  return (
    <li className={styles["block"]}>
      <div className={`${styles["block__ball"]} `} />
      <div
        className={`${styles.ball} ${
          board[block[0]][block[1]] === null
            ? ""
            : board[block[0]][block[1]] === "p1"
            ? styles["p1-color"]
            : styles["p2-color"]
        }`}
      ></div>
    </li>
  );
}
