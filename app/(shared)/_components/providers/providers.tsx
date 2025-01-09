"use client";;
import { BoardProvider } from "@app/(game-board)/_states";

import type { JSX } from "react";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props): JSX.Element {
  return <BoardProvider>{children}</BoardProvider>;
}
export default Providers;
