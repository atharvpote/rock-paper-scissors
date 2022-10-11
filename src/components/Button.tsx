import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type ButtonProps = {
  name?: string;
  icon: string;
  styles: string;
  position?: string;
  clickHandler?: () => void;
};

export default function Button(props: ButtonProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div
      className={`${props.position ? `absolute ${props.position}` : "static"}`}
    >
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: [null, 1.1, 1] }}
        transition={{ delay: props.position ? 0.5 : 0.75 }}
        className={`grid place-content-center rounded-full border-[16px] md:border-[20px] ${
          props.position ? "button-hover cursor-pointer" : " cursor-default"
        } ${props.styles}`}
        onClick={(): void => {
          if (props.clickHandler) props.clickHandler();
          navigate("/result");
        }}
        tabIndex={props.position ? 0 : -1}
        aria-label={props.name}
      >
        <div className="shadow-top grid h-20 w-20 place-content-center rounded-full bg-white md:h-28 md:w-28">
          <img src={props.icon} alt="" className="w-9 md:w-12" />
        </div>
        <span className="h-0 w-0 overflow-hidden">{props.name}</span>
      </motion.button>
    </div>
  );
}
