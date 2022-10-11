import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ButtonObject, Buttons } from "../App";
import Button from "./Button";

type Result = "user" | "house" | "tie";

type ResultProps = {
  buttons: Buttons;
  userChip: ButtonObject | null;
  score: number;
  setScore: React.Dispatch<number>;
};

export default function Result(props: ResultProps): JSX.Element {
  const [houseChip, setHouseChip] = useState<ButtonObject | null>(null);
  const [winner, setWinner] = useState<Result | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.userChip) navigate("/", { replace: true });
    else {
      const housePick = getHousePick(props.buttons);
      const winner = result(props.userChip, housePick);
      const score = getScore(winner, props.score);

      setHouseChip(housePick);
      setWinner(winner);
      props.setScore(score);

      localStorage.setItem("score", score.toString());
    }
  }, []);

  const width = window.innerWidth;

  return (
    <motion.div
      initial={{
        opacity: 0,
        minWidth: width >= 768 ? "25rem" : "17rem",
      }}
      animate={{ opacity: 1, minWidth: width >= 768 ? "40rem" : "17rem" }}
      exit={{ opacity: 0 }}
      transition={{ minWidth: { delay: 1.5 } }}
      className="mt-20 mb-8 flex max-w-xs flex-wrap justify-between gap-y-12 px-4 md:mt-8 md:mb-24 md:items-center"
    >
      <div className="flex flex-col items-center gap-8 md:order-1">
        <ChipCover winner={winner} shadow={winner === "user"}>
          {props.userChip && (
            <Button
              icon={props.userChip.icon}
              key={props.userChip.name}
              styles={props.userChip.styles}
            />
          )}
        </ChipCover>
        <div>
          <p className="uppercase">you picked</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 md:order-3">
        <ChipCover winner={winner} shadow={winner === "house"}>
          {houseChip && (
            <Button
              icon={houseChip.icon}
              key={houseChip.name}
              styles={houseChip.styles}
            />
          )}
        </ChipCover>
        <div>
          <p className="uppercase">the house picked</p>
        </div>
      </div>
      <motion.div
        initial={{
          ...(width >= 768 && {
            flexBasis: "0%",
            overflow: "hidden",
          }),
          opacity: 0,
        }}
        animate={{
          ...(width >= 768 && { flexBasis: "auto", overflow: "visible" }),
          opacity: 1,
        }}
        transition={{ delay: 2 }}
        className="basis-full md:order-2 md:basis-auto"
      >
        <div className="mb-6">
          <motion.p className="text-center text-5xl uppercase md:text-4xl">
            {winner === "user"
              ? "you won"
              : winner === "house"
              ? "you lose"
              : "tie"}
          </motion.p>
        </div>
        <Link
          to="/"
          className="dark-text mx-auto block w-56 rounded-lg bg-white py-4 text-center uppercase tracking-widest md:w-auto md:py-3 md:px-10"
          aria-label="play again"
        >
          play again
        </Link>
      </motion.div>
    </motion.div>
  );
}

type ChipCoverProps = {
  winner: Result | null;
  shadow: boolean;
  children: React.ReactNode;
};

function ChipCover(props: ChipCoverProps): JSX.Element | null {
  return (
    <div className="grid h-28 w-28 place-content-center rounded-full bg-[#192845] md:order-1 md:h-36 md:w-36">
      <motion.div
        initial={{
          boxShadow:
            "0 0 0px 0rem rgba(255, 255, 255, 0.075), 0 0 0px 0rem rgba(255, 255, 255, 0.05), 0 0 0px 0rem rgba(255, 255, 255, 0.025)",
        }}
        animate={
          props.shadow
            ? {
                boxShadow:
                  "0 0 0px 1rem rgba(255, 255, 255, 0.075), 0 0 0px 2.5rem rgba(255, 255, 255, 0.05), 0 0 0px 4.25rem rgba(255, 255, 255, 0.025)",
              }
            : {}
        }
        transition={{ delay: 2 }}
        className="rounded-full"
      >
        {props.children}
      </motion.div>
    </div>
  );
}

function getHousePick(buttons: Buttons): ButtonObject {
  return Object.values(buttons)[
    Math.floor(Math.random() * Object.keys(buttons).length)
  ];
}

function result(user: ButtonObject, house: ButtonObject): Result {
  if (user.name === house.name) return "tie";
  if (
    (user.name === "rock" && house.name === "scissors") ||
    (user.name === "paper" && house.name === "rock") ||
    (user.name === "scissors" && house.name === "paper")
  )
    return "user";

  return "house";
}

function getScore(result: Result, score: number): number {
  if (result === "tie") return score;

  if (result === "user") return score + 1;

  return score <= 0 ? 0 : score - 1;
}
