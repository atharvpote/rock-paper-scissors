import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
// import Start from "./components/Start";

import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";

export default function App(): JSX.Element {
  const buttons = {
    paper: {
      icon: paper,
      styles: "border-blue box-shadow-blue",
    },
    scissors: {
      icon: scissors,
      styles: "border-yellow box-shadow-yellow",
    },
    rock: {
      icon: rock,
      styles: "border-red box-shadow-red",
    },
  };

  return (
    <main>
      <Header />
      <Container>
        {/* <Start buttons={buttons} /> */}
        <Result buttons={buttons} />
      </Container>
      <Footer />
    </main>
  );
}
