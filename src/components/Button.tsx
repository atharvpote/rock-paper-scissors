import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PositionObject } from "./Start";

type ButtonProps = {
  icon: string;
  styles: string;
  position?: PositionObject;
  clickHandler?: () => void;
};

export default function Button(props: ButtonProps): JSX.Element {
  const position = props.position
    ? {
        top: props.position.top,
        bottom: props.position.bottom,
        left: props.position.left,
        right: props.position.right,
        translateX: props.position.translateX,
        translateY: props.position.translateY,
      }
    : {};

  const navigate = useNavigate();

  return (
    <motion.button
      initial={{
        position: props.position ? "absolute" : "static",
        scale: 1,
        opacity: 0,
        ...position,
      }}
      animate={{
        scale: [null, 1.1, 1],
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`grid place-content-center rounded-full border-[16px] md:border-[20px] ${props.styles}`}
      onClick={(): void => {
        if (props.clickHandler) props.clickHandler();
        navigate("/result");
      }}
    >
      <div className="shadow-top grid h-20 w-20 place-content-center rounded-full bg-white md:h-28 md:w-28">
        <img src={props.icon} alt="" className="w-9 md:w-12" />
      </div>
    </motion.button>
  );
}
