// Components
import { Board, Container } from "@app/(game-board)/_components";
import { Providers, Title } from "@app/(shared)/_components";

export default function Home() {
  return (
    <Container>
      <Title color="var(--color-1)" title="Find Four App" size="large" />
      <Board />
    </Container>
  );
}
