type Props = {
  children: React.ReactNode;
};

export default function Container(props: Props): JSX.Element {
  return (
    <div
      className={`grid min-h-[calc(100vh_-_144px_-_160px)] place-content-center  md:min-h-[calc(100vh_-_148px_-_72px)]`}
    >
      {props.children}
    </div>
  );
}
