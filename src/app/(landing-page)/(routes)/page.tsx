import Container from "../_components/container/container";
import Entry from "../_components/entry/Entry";
import Header from "../_components/header/header";
import Start from "../_components/start/start";

function HomePage(): React.ReactElement {
  return (
    <Container>
      <Entry />
      <Header title={["Find", "Four", "App"]} delay={2} />
      <Start delay={2} />
    </Container>
  );
}
export default HomePage;
