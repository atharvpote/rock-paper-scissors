import { useState, cloneElement } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Start from "./components/Start";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";
import { AnimatePresence } from "framer-motion";

export type ButtonObject = {
  name: "paper" | "scissors" | "rock";
  icon: string;
  styles: string;
};
export type Buttons = {
  [key: string]: ButtonObject;
};

export default function App(): JSX.Element | null {
  const [userChip, setUserChip] = useState<ButtonObject | null>(null);
  const [score, setScore] = useState<number>(0);
  const routes = useRoutes([
    {
      path: "/",
      element: <Start buttons={buttons} setUserPick={setUserChip} />,
    },
    {
      path: "/result",
      element: (
        <Result
          buttons={buttons}
          userChip={userChip}
          score={score}
          setScore={setScore}
        />
      ),
    },
  ]);
  const location = useLocation();

  if (!routes) return null;

  return (
    <main>
      <Header score={score} />
      <Container>
        <AnimatePresence mode="wait">
          {cloneElement(routes, { key: location.pathname })}
        </AnimatePresence>
      </Container>
      <Footer />
    </main>
  );
}

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
