import Button from "./Button";
import triangle from "../assets/bg-triangle.svg";
import { useContext } from "react";
import GlobalContext, { ContextValue } from "../context/GlobalContext";
import { Action } from "../context/reducer";
import { Buttons } from "../App";

type StartProps = {
  buttons: Buttons;
};
type Position = { [k: string]: string };

export default function Start({ buttons }: StartProps): JSX.Element {
  const { dispatch } = useContext(GlobalContext) as ContextValue;

  const position: Position = {
    paper: "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    scissors: "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2",
    rock: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  };

  return (
    <div className="relative w-40 md:w-60">
      <img src={triangle} alt="" />
      {mapButtons(buttons, position, dispatch)}
    </div>
  );
}

function mapButtons(
  buttons: Buttons,
  position: Position,
  dispatch: React.Dispatch<Action>
): JSX.Element[] {
  const output: JSX.Element[] = [];

  for (const key in buttons)
    output.push(
      <Button
        key={key}
        icon={buttons[key].icon}
        styles={buttons[key].styles}
        position={position[key]}
        handleClick={(): void => {
          dispatch({ type: "switchToResult" });
          dispatch({
            type: "selectChip",
            payload: { value: buttons[key].name },
          });
        }}
      />
    );

  return output;
}
