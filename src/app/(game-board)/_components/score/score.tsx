import styles from "./score.module.css";

import type { JSX } from "react";

interface Props {
  player1: number;
  player2: number;
}

function Score({ player1, player2 }: Props): JSX.Element {
  return (
    <header>
      <h1 className={styles["table-title"]}>Score</h1>
      <ul className={styles.table}>
        <li>
          <p>Player 1</p>
          <p className={styles["score-number"]}>{player1}</p>
        </li>
        <li>
          <p>Player 2</p>
          <p className={styles["score-number"]}>{player2}</p>
        </li>
      </ul>
    </header>
  );
}
export default Score;
