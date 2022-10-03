import { useContext } from "react";
import GlobalContext, { ContextValue } from "../context/GlobalContext";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { state } = useContext(GlobalContext) as ContextValue;

  return (
    <div
      className={`grid min-h-[calc(100vh_-_144px_-_80px)] place-content-center md:min-h-[calc(100vh_-_148px_-_72px)] ${
        state.currentPage === "result" ? "adjust-to-height" : ""
      }`}
    >
      {children}
    </div>
  );
}
