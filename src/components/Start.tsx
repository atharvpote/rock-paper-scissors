import { AnimatePresence, motion } from "framer-motion";
import { ButtonObject, Buttons } from "../App";
import Button from "./Button";
import triangle from "../assets/bg-triangle.svg";

export type StartProps = {
  buttons: Buttons;
  setUserPick: React.Dispatch<ButtonObject | null>;
};
type Values = "0" | "50%" | "-50%" | "auto";
export type PositionObject = {
  top: Values;
  bottom: Values;
  left: Values;
  right: Values;
  translateX: Values;
  translateY: Values;
};
type Positions = {
  [k: string]: PositionObject;
};

export default function Start(props: StartProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-40 md:w-60"
    >
      <img src={triangle} alt="" />
      {mapButtons(props.buttons, position, props.setUserPick)}
    </motion.div>
  );
}

function mapButtons(
  buttons: Buttons,
  position: Positions,
  userPick: React.Dispatch<ButtonObject | null>
): JSX.Element[] {
  const output: JSX.Element[] = [];

  for (const key in buttons)
    output.push(
      <AnimatePresence mode="wait" key={key}>
        {
          <Button
            key={key}
            icon={buttons[key].icon}
            styles={buttons[key].styles}
            position={position[key]}
            clickHandler={(): void => {
              userPick(buttons[key]);
            }}
          />
        }
      </AnimatePresence>
    );

  return output;
}

const position: Positions = {
  paper: {
    top: "0",
    bottom: "auto",
    left: "0",
    right: "auto",
    translateX: "-50%",
    translateY: "-50%",
  },
  scissors: {
    top: "0",
    bottom: "auto",
    left: "auto",
    right: "0",
    translateX: "50%",
    translateY: "-50%",
  },
  rock: {
    top: "auto",
    bottom: "0",
    left: "50%",
    right: "auto",
    translateX: "-50%",
    translateY: "50%",
  },
};
