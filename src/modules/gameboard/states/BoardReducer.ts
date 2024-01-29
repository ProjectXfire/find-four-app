import { BoardState } from "./BoardContext";

type IAction =
  | { type: "[Init board]"; payload: Array<Array<string | null>> }
  | {
      type: "[Change turn]";
      payload: {
        turn: "p1" | "p2";
        board: Array<Array<string | null>>;
      };
    }
  | {
      type: "[Set winner]";
      payload: {
        winner: string;
        isModalOpen: boolean;
      };
    }
  | { type: "[Reset game]"; payload: Array<Array<string | null>> };

export function BoardReducer(state: BoardState, action: IAction): BoardState {
  switch (action.type) {
    case "[Init board]":
      return { ...state, board: action.payload };
    case "[Change turn]": {
      return {
        ...state,
        playerTurn: action.payload.turn,
        board: action.payload.board,
      };
    }
    case "[Set winner]":
      return {
        ...state,
        isOpenModal: action.payload.isModalOpen,
        winner: action.payload.winner,
      };
    case "[Reset game]":
      return {
        ...state,
        board: action.payload,
        playerTurn: "p1",
        isOpenModal: false,
        winner: null,
      };
    default:
      return state;
  }
}
