export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="mt-12 grid min-h-[calc(100vh_-_144px_-_80px)] place-content-center md:min-h-[calc(100vh_-_148px_-_72px)]">
      {children}
    </div>
  );
}
