// Components
import { Board } from "@app/(game-board)/_components";
import { Providers, Title } from "@app/(shared)/_components";

export default function Home() {
  return (
    <main>
      <Providers>
        <Title title="Find Four App" size="large" />
        <Board />
      </Providers>
    </main>
  );
}
