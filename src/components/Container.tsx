type Props = {
  children: React.ReactNode;
  currentPage: "start" | "result";
};

export default function Container(props: Props): JSX.Element {
  return (
    <div
      className={`grid min-h-[calc(100vh_-_144px_-_80px)] place-content-center md:min-h-[calc(100vh_-_148px_-_72px)] ${
        props.currentPage === "result" ? "adjust-to-height" : ""
      }`}
    >
      {props.children}
    </div>
  );
}
