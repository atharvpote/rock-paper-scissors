import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ButtonObject, Buttons } from "../App";
import Button from "./Button";

type ResultProps = {
  buttons: Buttons;
  userChip: ButtonObject | null;
  score: number;
  setScore: React.Dispatch<number>;
};
type Result = "user" | "house" | "tie";
type ChipCoverProps = {
  winner: Result | null;
  shadow: boolean;
  children: React.ReactNode;
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

      setHouseChip(housePick);
      setWinner(winner);
      props.setScore(getScore(winner, props.score));
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[40rem] md:items-center"
    >
      {/* When play again is not visible */}
      {/* <div className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[27rem] md:items-center"> */}
      <div className="flex flex-col items-center gap-8 md:order-1">
        <ChipCover winner={winner} shadow={winner === "user"}>
          {props.userChip && (
            <Button icon={props.userChip.icon} styles={props.userChip.styles} />
          )}
        </ChipCover>
        <div>
          <p className="uppercase">you picked</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 md:order-3">
        <ChipCover winner={winner} shadow={winner === "house"}>
          {houseChip && (
            <Button icon={houseChip.icon} styles={houseChip.styles} />
          )}
        </ChipCover>
        <div>
          <p className="uppercase">the house picked</p>
        </div>
      </div>
      <div className="basis-full md:order-2 md:basis-auto">
        {/* when it's visible */}
        {/* <div className="md:0 basis-full md:order-2 md:basis-0 md:overflow-hidden"> */}
        <div className="mb-6">
          <p className="text-center text-5xl uppercase md:text-4xl">
            {winner === "user"
              ? "you won"
              : winner === "house"
              ? "you lose"
              : "tie"}
          </p>
        </div>
        <Link
          to="/"
          className="dark-text mx-auto block w-56 rounded-lg bg-white py-4 text-center uppercase tracking-widest md:w-auto md:py-3 md:px-10"
        >
          play again
        </Link>
      </div>
    </motion.div>
  );
}

function ChipCover(props: ChipCoverProps): JSX.Element | null {
  return (
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
      transition={{ delay: 1 }}
      className="grid h-28 w-28 place-content-center rounded-full bg-[#192845] md:order-1 md:h-36 md:w-36"
    >
      {props.children}
    </motion.div>
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
