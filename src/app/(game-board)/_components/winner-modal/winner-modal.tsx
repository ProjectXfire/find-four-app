"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
// Styles
import styles from "./winner-modal.module.css";

interface Props {
  title: string;
  subtitle: string | null;
  isOpen: boolean;
  close: () => void;
}

export default function WinnerModal({ isOpen, close, title, subtitle }: Props): React.ReactElement {
  const modalRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<boolean>(false);

  const onClosing = () => {
    if (modalRef.current) {
      modalRef.current.classList.add(styles["modal-fadeout"]);
      flagRef.current = true;
    }
  };

  const onAnimationEnd = (): void => {
    if (flagRef.current) {
      close();
      flagRef.current = false;
    }
  };

  useEffect(() => {
    if (isOpen) confetti();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className={styles["modal-background"]} />
          <article
            ref={modalRef}
            className={`${styles["modal"]} ${styles["modal-fadein"]}`}
            onAnimationEnd={onAnimationEnd}
          >
            <h1 className={styles["modal__title"]}>{title}</h1>
            <p>⭐⭐⭐⭐⭐</p>
            <p className={styles["modal__subtitle"]}>{subtitle}</p>
            <div className={styles["modal__actions"]}>
              <button className={styles["modal-close"]} type="button" onClick={onClosing}>
                Close
              </button>
            </div>
          </article>
        </>
      )}
    </>
  );
}
