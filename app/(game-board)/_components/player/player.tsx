"use client";

// Styles
import styles from "./player.module.css";
import { type FC } from "react";

interface Props {
  playerTurn: string;
}

export const Players: FC<Props> = ({ playerTurn }) => {
  return (
    <section className={styles["board-players"]}>
      <div
        className={`${styles.player} ${styles["player-1"]} ${
          playerTurn === "p1" ? styles["turn-player"] : ""
        }`}
      >
        <span>Player</span>
        <span className={styles["player__number"]}>1</span>
      </div>
      <div
        className={`${styles.player} ${styles["player-2"]} ${
          playerTurn === "p2" ? styles["turn-player"] : ""
        }`}
      >
        <span>Player</span>
        <span className={styles["player__number"]}>2</span>
      </div>
    </section>
  );
};
