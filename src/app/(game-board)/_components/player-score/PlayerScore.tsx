import styles from "./Styles.module.css";

interface Props {
  name: string;
  score: number;
}

function PlayerScore({ name, score }: Props): React.ReactElement {
  return (
    <div className={styles.score}>
      <p className={styles.score__name}>{name}</p>
      <div className={styles.score__value}>{score}</div>
    </div>
  );
}
export default PlayerScore;
