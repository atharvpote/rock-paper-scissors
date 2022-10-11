import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import rules from "../assets/image-rules.svg";
import close from "../assets/icon-close.svg";

export default function Rules(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    function escFunction(e: KeyboardEvent): void {
      if (e.key === "Escape") navigate("/");
    }

    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, []);

  const width = window.innerWidth;

  return (
    <motion.div
      initial={
        width >= 768
          ? {
              opacity: 0,
            }
          : {
              top: "100%",
            }
      }
      animate={
        width >= 768
          ? {
              opacity: 1,
            }
          : {
              top: "0%",
            }
      }
      exit={
        width >= 768
          ? {
              opacity: 0,
            }
          : {
              top: "100%",
            }
      }
      transition={{ type: "tween" }}
      className="fixed left-0 grid h-screen w-screen place-content-center bg-white md:top-0 md:bg-[rgba(0,0,0,0.5)]"
    >
      <div className="relative mx-auto w-4/5 md:w-96 md:rounded-md md:bg-white md:p-6">
        <header className="mb-16 items-center justify-between md:mb-8 md:flex">
          <h2 className="dark-text text-center text-2xl font-bold uppercase">
            rules
          </h2>
          <Link
            to="/"
            className="absolute bottom-0 left-1/2 block w-4 -translate-x-1/2 md:static md:translate-x-0"
          >
            <img src={close} alt="" />
          </Link>
        </header>
        <div className="mb-28 md:m-0 md:flex md:justify-center">
          <img src={rules} alt="rules" className="block" />
        </div>
      </div>
    </motion.div>
  );
}
