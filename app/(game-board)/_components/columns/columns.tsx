"use client";

import { useContext, useEffect, useRef } from "react";
// Styles
import styles from "./columns.module.css";
// States
import { BoardContext } from "@app/(game-board)/_states/board-context/BoardContext";
// Components
import BoardItem from "../block/block";

interface Props {
  items: Array<null | string>;
  columnId: number;
}

export default function BoardColumns({ items, columnId }: Props): React.ReactElement {
  const {
    state: { boardConfig },
    setBlockPlayer,
  } = useContext(BoardContext);
  const item = useRef(boardConfig.limitColumn);

  useEffect(() => {
    item.current = boardConfig.limitColumn;
  }, [boardConfig]);

  return (
    <li
      onClick={() => {
        setBlockPlayer(columnId, item.current);
        item.current--;
      }}
    >
      <ul className={styles["board-column"]}>
        {items.map((_, i) => (
          <BoardItem key={i} block={[columnId, i]} />
        ))}
      </ul>
    </li>
  );
}
