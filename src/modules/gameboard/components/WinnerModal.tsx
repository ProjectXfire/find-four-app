import React, { FC } from "react";
// Styles
import styles from "../styles/Winner-modal.module.scss";

interface Props {
  title: string;
  subtitle: string | null;
  isOpen: boolean;
  close: () => void;
}

export const WinnerModal: FC<Props> = ({ isOpen, close, title, subtitle }) => {
  const onClosing = () => {
    close();
  };

  return (
    <>
      {isOpen && (
        <>
          <div className={styles["modal-background"]} />
          <article className={styles["modal"]}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div>
              <button type="button" onClick={onClosing}>
                Close
              </button>
            </div>
          </article>
        </>
      )}
    </>
  );
};
