"use client";

import React, { FC, useContext } from "react";
// Context
import { BoardContext } from "@app/(game-board)/_states";
// Styles
import styles from "./block.module.css";

interface Props {
  block: [number, number];
}

export const BoardItem: FC<Props> = ({ block }) => {
  const {
    state: { board },
  } = useContext(BoardContext);

  return (
    <div className={styles["block"]}>
      <div
        className={`${styles["block__ball"]} ${
          board[block[0]][block[1]] === null
            ? ""
            : board[block[0]][block[1]] === "p1"
            ? styles["p1-color"]
            : styles["p2-color"]
        }`}
      />
    </div>
  );
};
