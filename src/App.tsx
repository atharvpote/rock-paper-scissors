import { useState, useEffect } from "react";
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

export interface ButtonObject {
  name: "paper" | "scissors" | "rock";
  icon: string;
  styles: string;
}

export default function App() {
  const [userChip, setUserChip] = useState<ButtonObject | null>(null);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const score = localStorage.getItem("score");

    if (score) setScore(Number.parseInt(score));
  }, []);

  const [rules, showRules] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(true);

  return (
    <main>
      <Header score={score} />
      <Container>
        <AnimatePresence mode="wait">
          {start ? (
            <Start
              key={"start"}
              buttons={buttons}
              setUserPick={setUserChip}
              setStart={setStart}
            />
          ) : (
            <Result
              key={"result"}
              buttons={buttons}
              userChip={userChip}
              score={score}
              setScore={setScore}
              setStart={setStart}
            />
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {rules && <Rules key={"rules"} setShow={showRules} />}
        </AnimatePresence>
      </Container>
      <Footer setScore={setScore} showRules={showRules} setStart={setStart} />
    </main>
  );
}

export type Buttons = Record<string, ButtonObject>;

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
