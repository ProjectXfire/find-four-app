"use client";

import React, { useContext } from "react";
// States
import { BoardContext } from "@app/(game-board)/_states";
// Styles
import styles from "./board.module.css";
// Components
import { WinnerModal, BoardColumns, Players } from "..";

export const Board = () => {
  const {
    state: { board, playerTurn, isOpenModal, winner },
    resetGame,
  } = useContext(BoardContext);

  return (
    <main>
      <section style={{ width: "100%", overflow: "auto" }}>
        <div className={styles["board-columns"]}>
          {board.map((items, i) => (
            <BoardColumns key={i} items={items} columnId={i} />
          ))}
        </div>
      </section>
      <Players playerTurn={playerTurn} />
      <WinnerModal
        isOpen={isOpenModal}
        title="The winner is"
        subtitle={winner}
        close={resetGame}
      />
    </main>
  );
};
