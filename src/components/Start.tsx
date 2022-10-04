import { ButtonObject, Buttons } from "../App";
import Button from "./Button";
import triangle from "../assets/bg-triangle.svg";

type StartProps = {
  buttons: Buttons;
  setUserPick: React.Dispatch<ButtonObject | null>;
};
type Position = { [k: string]: string };

export default function Start(props: StartProps): JSX.Element {
  return (
    <div className="relative w-40 md:w-60">
      <img src={triangle} alt="" />
      {mapButtons(props.buttons, position, props.setUserPick)}
    </div>
  );
}

const position: Position = {
  paper: "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  scissors: "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2",
  rock: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
};

function mapButtons(
  buttons: Buttons,
  position: Position,
  userPick: React.Dispatch<ButtonObject | null>
): JSX.Element[] {
  const output: JSX.Element[] = [];

  for (const key in buttons)
    output.push(
      <Button
        key={key}
        icon={buttons[key].icon}
        styles={buttons[key].styles}
        position={position[key]}
        clickHandler={(): void => userPick(buttons[key])}
      />
    );

  return output;
}
