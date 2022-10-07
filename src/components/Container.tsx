type Props = {
  children: React.ReactNode;
};

export default function Container(props: Props): JSX.Element {
  return (
    <div
      className={`grid min-h-[calc(100vh_-_144px_-_80px)] place-content-center py-20 md:min-h-[calc(100vh_-_148px_-_72px)] md:py-28`}
    >
      {props.children}
    </div>
  );
}
