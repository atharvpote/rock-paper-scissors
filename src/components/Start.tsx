import Button from "./Button";

import triangle from "../assets/bg-triangle.svg";

type StartProps = {
  buttons: {
    [key: string]: {
      icon: string;
      styles: string;
    };
  };
};

export default function Start({ buttons }: StartProps): JSX.Element {
  const position: { [k: string]: string } = {
    paper: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    scissors: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    rock: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  };

  return (
    <div className="relative w-40 md:w-60">
      <img src={triangle} alt="" />
      {mapButtons(buttons, position)}
    </div>
  );
}

function mapButtons(
  buttons: {
    [key: string]: {
      icon: string;
      styles: string;
    };
  },
  position: {
    [k: string]: string;
  }
): JSX.Element[] {
  const output: JSX.Element[] = [];

  for (const key in buttons)
    output.push(
      <Button
        key={key}
        icon={buttons[key].icon}
        styles={buttons[key].styles}
        position={position[key]}
      />
    );

  return output;
}
