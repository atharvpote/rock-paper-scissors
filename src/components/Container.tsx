export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-[calc(100vh_-_144px_-_80px)] place-content-center md:h-[calc(100vh_-_148px_-_72px)]">
      {children}
    </div>
  );
}
