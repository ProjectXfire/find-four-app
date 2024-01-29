// Styles
import styles from "../styles/Players.module.scss";
import { type FC } from "react";

interface Props {
  playerTurn: string;
}

export const Players: FC<Props> = ({ playerTurn }) => {
  return (
    <section className={styles["board-players"]}>
      <div className={playerTurn === "p1" ? styles["turn-player"] : ""}>
        <span>Player</span>
        <span>1</span>
      </div>
      <div className={playerTurn === "p2" ? styles["turn-player"] : ""}>
        <span>Player</span>
        <span>2</span>
      </div>
    </section>
  );
};
