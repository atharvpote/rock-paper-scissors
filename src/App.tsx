import { useContext } from "react";
import GlobalContext, { ContextValue } from "./context/GlobalContext";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Start from "./components/Start";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";

export type ButtonObject = {
  name: "paper" | "scissors" | "rock";
  icon: string;
  styles: string;
};
export type Buttons = {
  [key: string]: ButtonObject;
};

export default function App(): JSX.Element {
  const buttons: Buttons = {
    paper: {
      name: "paper",
      icon: paper,
      styles: "border-blue box-shadow-blue",
    },
    scissors: {
      name: "scissors",
      icon: scissors,
      styles: "border-yellow box-shadow-yellow",
    },
    rock: {
      name: "rock",
      icon: rock,
      styles: "border-red box-shadow-red",
    },
  };

  const { state } = useContext(GlobalContext) as ContextValue;

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
