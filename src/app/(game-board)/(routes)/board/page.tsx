// Components

import Title from "@/shared/components/title/title";
import Navbar from "../../_components/navbar/Navbar";
import Board from "../../_components/board/board";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Title color="var(--color-1)" title="Find Four App" size="large" />
      <Board />
    </main>
  );
}
