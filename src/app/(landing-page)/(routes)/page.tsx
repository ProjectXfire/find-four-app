import Container from "../_components/container/container";
import Header from "../_components/header/header";
import Start from "../_components/start/start";

function HomePage(): React.ReactElement {
  return (
    <Container>
      <Header />
      <Start />
    </Container>
  );
}
export default HomePage;
