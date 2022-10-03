import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Start from "./components/Start";

import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";
import { useContext, useEffect } from "react";
import GlobalContext, { ContextValue } from "./context/GlobalContext";

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

  const { state, dispatch } = useContext(GlobalContext) as ContextValue;

  useEffect(() => {
    dispatch({ type: "switchToResult" });
  }, []);

  return (
    <main>
      <Header />
      <Container>
        {state.currentPage === "start" ? (
          <Start buttons={buttons} />
        ) : (
          <Result buttons={buttons} />
        )}
      </Container>
      <Footer />
    </main>
  );
}
