import { useContext, useEffect } from "react";
import { State } from "../context/initialState";
import GlobalContext, { ContextValue } from "../context/GlobalContext";
import { ButtonObject, Buttons } from "../App";
import Button from "./Button";

type ResultProps = {
  buttons: Buttons;
};

export default function Result(props: ResultProps): JSX.Element {
  const { state, dispatch } = useContext(GlobalContext) as ContextValue;
  const decision = result(state);

  useEffect(() => {
    dispatch({
      type: "housePick",
      payload: { value: housePick(props.buttons) },
    });
  }, []);

  useEffect(() => {
    if (decision === "tie") return;

    if (decision === "user") dispatch({ type: "incrementScore" });
    else dispatch({ type: "decrementScore" });
  }, [state.housePick]);

  return (
    <div className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[40rem] md:items-center">
      {/* When play again is not visible */}
      {/* <div className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[27rem] md:items-center"> */}
      <div className="flex flex-col items-center gap-8 md:order-1">
        <div
          className={`grid h-28 w-28 place-content-center rounded-full bg-[#192845] md:order-1 md:h-36 md:w-36 ${
            decision === "user" ? "winner-shadow" : ""
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
            decision === "house" ? "winner-shadow" : ""
          }`}
        >
          {state.housePick && (
            <Button
              icon={state.housePick.icon}
              styles={state.housePick.styles}
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
            {decision === "user"
              ? "you won"
              : decision === "house"
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

function result(state: State): "user" | "house" | "tie" | void {
  if (state.userPick && state.housePick) {
    if (state.userPick.name === state.housePick.name) return "tie";
    if (
      (state.userPick.name === "paper" && state.housePick.name === "rock") ||
      (state.userPick.name === "rock" && state.housePick.name === "scissors") ||
      (state.userPick.name === "scissors" && state.housePick.name === "paper")
    )
      return "user";

    return "house";
  }
}
