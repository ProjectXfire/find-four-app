"use client";

import React, { FC } from "react";
// Styles
import styles from "./winner-modal.module.css";

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
            <h1 className={styles["modal__title"]}>{title}</h1>
            <p className={styles["modal__subtitle"]}>{subtitle}</p>
            <div className={styles["modal__actions"]}>
              <button
                className={styles["modal-close"]}
                type="button"
                onClick={onClosing}
              >
                Close
              </button>
            </div>
          </article>
        </>
      )}
    </>
  );
};
