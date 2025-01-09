"use client";

import { BoardProvider } from "../../_states/board-context/BoardContext";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props): React.ReactElement {
  return <BoardProvider>{children}</BoardProvider>;
}
export default Providers;
