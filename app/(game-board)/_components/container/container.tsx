"use client";

import NextLink from "next/link";
import { useContext } from "react";
import { type TItems } from "@app/(shared)/_components/menu/menu";
// States
import { BoardContext } from "@app/(game-board)/_states";
// Styles
import styles from "./container.module.css";
// Components
import { Menu } from "@app/(shared)/_components";

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props): JSX.Element {
  const { setBoadConfig } = useContext(BoardContext);

  const items: TItems[] = [
    {
      name: "Board 6x6",
      command: () => {
        setBoadConfig(6, 6);
      },
    },
    {
      name: "Board 8x8",
      command: () => {
        setBoadConfig(8, 8);
      },
    },
    {
      name: "Board 10x10",
      command: () => {
        setBoadConfig(10, 10);
      },
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles["menu-container"]}>
        <Menu items={items} />
        <NextLink className={styles.close} type="button" href="/">
          ❌
        </NextLink>
      </div>
      {children}
    </main>
  );
}
export default Container;
