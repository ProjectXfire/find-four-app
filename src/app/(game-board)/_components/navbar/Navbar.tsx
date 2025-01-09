"use client";

import NextLink from "next/link";
import { useContext } from "react";
// States
import { BoardContext } from "../../_states/board-context/BoardContext";
// Styles
import styles from "./Styles.module.css";
// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { X } from "lucide-react";
import PlayerScore from "../player-score/PlayerScore";

function Navbar(): React.ReactElement {
  const {
    setBoadConfig,
    state: { p1, p2 },
  } = useContext(BoardContext);

  const items = [
    {
      name: "Board 6x6",
      value: [6, 6],
    },
    {
      name: "Board 8x8",
      value: [8, 8],
    },
    {
      name: "Board 10x10",
      value: [10, 10],
    },
  ];

  const handleBoard = (value: string): void => {
    const board = items.find((item) => item.name === value);
    if (!board) return;
    setBoadConfig(board.value[0], board.value[1]);
  };

  return (
    <nav className={styles["menu-container"]}>
      <PlayerScore name="Player 1" score={p1} />
      <PlayerScore name="Player 2" score={p2} />
      <Select onValueChange={(value) => handleBoard(value)}>
        <SelectTrigger className={styles["menu-select-trigger"]}>
          <SelectValue placeholder="Select a board" />
        </SelectTrigger>
        <SelectContent className={styles["menu-select"]}>
          {items.map((item, i) => (
            <SelectItem key={i} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <NextLink className={styles.close} type="button" href="/">
        <X />
      </NextLink>
    </nav>
  );
}
export default Navbar;
