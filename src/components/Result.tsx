import { useContext, useEffect, useState } from "react";
import GlobalContext, { ContextValue } from "../context/GlobalContext";
import { ButtonObject, Buttons } from "../App";
import Button from "./Button";

type ResultProps = {
  buttons: Buttons;
};
type Result = "user" | "house" | "tie";

export default function Result(props: ResultProps): JSX.Element {
  const { state, dispatch } = useContext(GlobalContext) as ContextValue;
  const [houseChip, setHouseChip] = useState<ButtonObject | null>(null);
  const [winner, setWinner] = useState<Result | null>(null);

  useEffect(() => {
    setHouseChip(housePick(props.buttons));
  }, []);

  useEffect(() => {
    if (state.userPick && houseChip)
      setWinner(result(state.userPick, houseChip));
  }, [houseChip]);

  useEffect(() => {
    if (winner === "user") dispatch({ type: "incrementScore" });
    if (winner === "house") dispatch({ type: "decrementScore" });
  }, [winner]);

  return (
    <div className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[40rem] md:items-center">
      {/* When play again is not visible */}
      {/* <div className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[27rem] md:items-center"> */}
      <div className="flex flex-col items-center gap-8 md:order-1">
        <div
          className={`grid h-28 w-28 place-content-center rounded-full bg-[#192845] md:order-1 md:h-36 md:w-36 ${
            winner === "user" ? "winner-shadow" : ""
          }`}
        >
          {state.userPick && (
            <Button
              icon={state.userPick.icon}
              styles={state.userPick.styles}
              position=""
            />
          )}
        </div>
        <div>
          <p className="uppercase">you picked</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 md:order-3">
        <div
          className={`grid h-28 w-28 place-content-center rounded-full bg-[#192845] md:order-1 md:h-36 md:w-36 ${
            winner === "house" ? "winner-shadow" : ""
          }`}
        >
          {houseChip && (
            <Button
              icon={houseChip.icon}
              styles={houseChip.styles}
              position=""
            />
          )}
        </div>
        <div>
          <p className="uppercase">the house picked</p>
        </div>
      </div>
      <div className="basis-full md:order-2 md:basis-auto">
        {/* when it's visible */}
        {/* <div className="md:0 basis-full md:order-2 md:basis-0 md:overflow-hidden"> */}
        <div className="mb-6">
          <p className="text-center text-6xl uppercase md:text-4xl">
            {winner === "user"
              ? "you won"
              : winner === "house"
              ? "you lose"
              : "tie"}
          </p>
        </div>
        <button
          className="dark-text mx-auto block rounded-lg bg-white px-16 py-4 text-center uppercase tracking-widest md:py-3  md:px-10"
          onClick={(): void => {
            dispatch({ type: "switchToStart" });
          }}
        >
          play again
        </button>
      </div>
    </div>
  );
}

function housePick(buttons: Buttons): ButtonObject {
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
