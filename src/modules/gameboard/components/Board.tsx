// Styles
import styles from "../styles/Board.module.scss";
import React, { useContext } from "react";
// States
import { BoardContext } from "../states";
// Components
import { BoardColumns } from "./BoardColumns";
import { WinnerModal } from "./WinnerModal";
import { Players } from "./Players";

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
