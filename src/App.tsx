import { useState, cloneElement, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Start from "./components/Start";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import rock from "./assets/icon-rock.svg";
import Rules from "./components/Rules";

export type ButtonObject = {
  name: "paper" | "scissors" | "rock";
  icon: string;
  styles: string;
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
    {
      path: "/rules",
      element: <Rules />,
    },
  ]);
  const location = useLocation();

  useEffect(() => {
    const score = localStorage.getItem("score");

    if (score) setScore(Number.parseInt(score));
  }, []);

  if (!routes) return null;

  return (
    <main>
      <Header score={score} />
      <Container>
        <AnimatePresence mode="wait">
          {cloneElement(routes, { key: location.pathname })}
        </AnimatePresence>
      </Container>
      <Footer setScore={setScore} />
    </main>
  );
}

export type Buttons = {
  [key: string]: ButtonObject;
};

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
