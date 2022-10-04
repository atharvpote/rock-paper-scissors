import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Container(props: Props): JSX.Element {
  const location = useLocation();

  return (
    <div
      className={`grid min-h-[calc(100vh_-_144px_-_80px)] place-content-center md:min-h-[calc(100vh_-_148px_-_72px)] ${
        location.pathname === "/result" ? "adjust-to-height" : ""
      }`}
    >
      {props.children}
    </div>
  );
}
