import { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState<"start" | "result">("start");
  const [userChip, setUserChip] = useState<ButtonObject | null>(null);
  const [score, setScore] = useState<number>(0);

  return (
    <main>
      <Header score={score} />
      <Container currentPage={currentPage}>
        {currentPage === "start" ? (
          <Start
            buttons={buttons}
            setPage={setCurrentPage}
            setUserPick={setUserChip}
          />
        ) : (
          userChip && (
            <Result
              buttons={buttons}
              userChip={userChip}
              score={score}
              setScore={setScore}
              setPage={setCurrentPage}
            />
          )
        )}
      </Container>
      <Footer />
    </main>
  );
}
