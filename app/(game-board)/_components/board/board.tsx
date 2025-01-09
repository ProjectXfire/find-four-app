"use client";

import React, { useContext } from "react";
// States
import { BoardContext } from "@app/(game-board)/_states";
// Styles
import styles from "./board.module.css";
// Components
import { WinnerModal, BoardColumns, Players, Score } from "..";
import { FadeInContainer } from "@app/(shared)/_components";

export const Board = () => {
  const {
    state: {
      board,
      playerTurn,
      isOpenModal,
      winner,
      p1,
      p2,
      countPlays,
      boardConfig: { columns, rows },
    },
    resetGame,
  } = useContext(BoardContext);

  return (
    <>
      <section className={styles["container-header"]}>
        <Score player1={p1} player2={p2} />
      </section>
      <FadeInContainer>
        <section className={styles["container-board"]}>
          <ul className={styles["board-columns"]}>
            {board.map((items, i) => (
              <BoardColumns key={i} items={items} columnId={i} />
            ))}
          </ul>
        </section>
      </FadeInContainer>
      <Players playerTurn={playerTurn} />
      <WinnerModal
        isOpen={countPlays === columns * rows}
        title="The winner is"
        subtitle="No winner"
        close={resetGame}
      />
      <WinnerModal
        isOpen={isOpenModal}
        title="The winner is"
        subtitle={winner === "p1" ? "Player 1" : "Player 2"}
        close={resetGame}
      />
    </>
  );
};
