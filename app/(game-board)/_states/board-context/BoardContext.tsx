import { createContext, ReactNode, useEffect, useReducer } from "react";
import { BoardReducer } from "./BoardReducer";
// Helpers
import { fourInLine } from "@app/(shared)/_helpers/verifyWinner";
import { newBoard } from "@app/(shared)/_helpers/createBoard";

export type TPlayer = "p1" | "p2";

type TBoardConfig = {
  columns: number;
  rows: number;
  limitColumn: number;
};

export interface BoardState {
  board: Array<Array<string | null>>;
  boardConfig: TBoardConfig;
  playerTurn: TPlayer;
  winner: string | null;
  isOpenModal: boolean;
  countPlays: number;
  p1: number;
  p2: number;
}

const BoardInitState: BoardState = {
  board: [],
  boardConfig: {
    columns: 6,
    rows: 6,
    limitColumn: 5,
  },
  countPlays: 0,
  playerTurn: "p1",
  winner: null,
  isOpenModal: false,
  p1: 0,
  p2: 0,
};

interface BoardContextProps {
  state: BoardState;
  setBlockPlayer: (c: number, i: number) => void;
  setBoadConfig: (columns: number, rows: number) => void;
  resetGame: () => void;
}

export const BoardContext = createContext({} as BoardContextProps);

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(BoardReducer, BoardInitState);

  async function setBlockPlayer(column: number, item: number): Promise<void> {
    if (item < 0) return;
    const turn = state.playerTurn === "p1" ? "p2" : "p1";
    const updateBoard = [...state.board];
    updateBoard[column][item] = state.playerTurn;
    const values = await fourInLine(state.board, state.playerTurn, [column, item]);
    const winner = Math.max(...values) === 4 ? true : false;
    if (winner) {
      dispatch({ type: "[Update player score]", payload: state.playerTurn });
      dispatch({
        type: "[Set winner]",
        payload: { isModalOpen: true, winner: state.playerTurn },
      });
      return;
    }

    dispatch({ type: "[Update plays]", payload: state.countPlays + 1 });
    dispatch({
      type: "[Change turn]",
      payload: { turn, board: updateBoard },
    });
  }

  function setBoadConfig(columns: number, rows: number): void {
    const cleanBoard = newBoard(columns, rows);
    dispatch({ type: "[Reset game]", payload: cleanBoard });
    dispatch({ type: "[Set board config]", payload: { columns, rows } });
  }

  function resetGame(): void {
    const { columns, rows } = state.boardConfig;
    const cleanBoard = newBoard(columns, rows);
    dispatch({ type: "[Reset game]", payload: cleanBoard });
    dispatch({ type: "[Set board config]", payload: { columns, rows } });
  }

  useEffect(() => {
    const { columns, rows } = state.boardConfig;
    const cleanBoard = newBoard(columns, rows);
    dispatch({ type: "[Reset game]", payload: cleanBoard });
  }, [state.boardConfig]);

  return (
    <BoardContext.Provider value={{ state, setBlockPlayer, resetGame, setBoadConfig }}>
      {children}
    </BoardContext.Provider>
  );
};
