// Components

import Board from "@app/(game-board)/_components/board/board";
import Container from "@app/(game-board)/_components/container/container";
import Title from "@app/(shared)/_components/title/title";

export default function Home() {
  return (
    <Container>
      <Title color="var(--color-1)" title="Find Four App" size="large" />
      <Board />
    </Container>
  );
}
