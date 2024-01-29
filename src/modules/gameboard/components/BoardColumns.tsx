import React, { FC, useContext, useEffect, useRef } from "react";
// Styles
import styles from "../styles/Board.module.scss";
// States
import { BoardContext } from "../states";
// Components
import { BoardItem } from "./BoardItem";

interface Props {
  items: Array<null | string>;
  columnId: number;
}

export const BoardColumns: FC<Props> = ({ items, columnId }) => {
  const {
    state: { isOpenModal },
    setBlockPlayer,
  } = useContext(BoardContext);
  const item = useRef(5);

  useEffect(() => {
    if (isOpenModal) {
      item.current = 5;
    }
  }, [isOpenModal]);

  return (
    <div
      className={styles["board-column"]}
      onClick={() => {
        setBlockPlayer(columnId, item.current);
        item.current--;
      }}
    >
      {items.map((_, i) => (
        <BoardItem key={i} block={[columnId, i]} />
      ))}
    </div>
  );
};
