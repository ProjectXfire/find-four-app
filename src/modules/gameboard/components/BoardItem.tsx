import React, { FC, useContext } from "react";
// Styles
import styles from "../styles/Board.module.scss";
import { BoardContext } from "../states";

interface Props {
  block: [number, number];
}

export const BoardItem: FC<Props> = ({ block }) => {
  const {
    state: { board },
  } = useContext(BoardContext);

  return (
    <div className={styles["item"]}>
      <div
        className={
          board[block[0]][block[1]] === null
            ? ""
            : board[block[0]][block[1]] === "p1"
            ? styles["p1-color"]
            : styles["p2-color"]
        }
      />
    </div>
  );
};
