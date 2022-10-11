import { AnimatePresence, motion } from "framer-motion";
import { ButtonObject, Buttons } from "../App";
import Button from "./Button";
import triangle from "../assets/bg-triangle.svg";

type StartProps = {
  buttons: Buttons;
  setUserPick: React.Dispatch<ButtonObject | null>;
};

export default function Start(props: StartProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative mt-20 mb-24 w-40 md:mt-28 md:w-60"
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
            name={key}
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

type Positions = {
  [k: string]: string;
};

const position: Positions = {
  paper: "top-0 left-0 -translate-y-1/2 -translate-x-1/2",
  scissors: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  rock: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
};
