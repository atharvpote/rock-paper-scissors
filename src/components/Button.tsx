import { motion } from "framer-motion";

interface ButtonProps {
  name?: string;
  icon: string;
  styles: string;
  position?: string;
  clickHandler?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <div className={props.position ? `absolute ${props.position}` : "static"}>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: [null, 1.1, 1] }}
        transition={{ delay: props.position ? 0.5 : 0.75 }}
        className={`grid place-content-center rounded-full border-[16px] md:border-[20px] ${
          props.position ? "button-hover cursor-pointer" : " cursor-default"
        } ${props.styles}`}
        onClick={() => {
          if (props.clickHandler) props.clickHandler();
        }}
        tabIndex={props.position ? 0 : -1}
        aria-label={props.name}
      >
        <span className="shadow-top grid h-20 w-20 place-content-center rounded-full bg-white md:h-28 md:w-28">
          <img src={props.icon} alt="" className="w-9 md:w-12" />
        </span>
        <span className="h-0 w-0 overflow-hidden">{props.name}</span>
      </motion.button>
    </div>
  );
}
