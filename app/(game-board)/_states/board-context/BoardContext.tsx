import { createContext, ReactNode, useEffect, useReducer } from "react";
import { BoardReducer } from "./BoardReducer";
// Helpers
import { fourInLine } from "@app/(shared)/_helpers";

export interface BoardState {
  board: Array<Array<string | null>>;
  playerTurn: string;
  winner: string | null;
  isOpenModal: boolean;
}

const BoardInitState: BoardState = {
  board: [],
  playerTurn: "p1",
  winner: null,
  isOpenModal: false,
};

interface BoardContextProps {
  state: BoardState;
  setBlockPlayer: (c: number, i: number) => void;
  resetGame: () => void;
}

const INIT_BOARD = new Array(6).fill(null).map(() => new Array(6).fill(null));

export const BoardContext = createContext({} as BoardContextProps);

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(BoardReducer, BoardInitState);

  async function setBlockPlayer(column: number, item: number) {
    if (item < 0) return;
    const turn = state.playerTurn === "p1" ? "p2" : "p1";
    const updateBoard = [...state.board];
    updateBoard[column][item] = state.playerTurn;
    const values = await fourInLine(state.board, state.playerTurn, [
      column,
      item,
    ]);
    const winner = Math.max(...values) === 4 ? true : false;
    if (winner) {
      const player = state.playerTurn === "p1" ? "Player 1" : "Player 2";
      dispatch({
        type: "[Set winner]",
        payload: { isModalOpen: true, winner: player },
      });
      return;
    }
    dispatch({
      type: "[Change turn]",
      payload: { turn, board: updateBoard },
    });
  }

  function resetGame() {
    const cloneInit = JSON.parse(JSON.stringify(INIT_BOARD));
    dispatch({ type: "[Reset game]", payload: cloneInit });
  }

  useEffect(() => {
    const cloneInit = JSON.parse(JSON.stringify(INIT_BOARD));
    dispatch({ type: "[Init board]", payload: cloneInit });
  }, []);

  return (
    <BoardContext.Provider value={{ state, setBlockPlayer, resetGame }}>
      {children}
    </BoardContext.Provider>
  );
};
