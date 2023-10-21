interface FooterProps {
  setScore: React.Dispatch<number>;
  showRules: React.Dispatch<boolean>;
  setStart: React.Dispatch<boolean>;
}

export default function Footer(props: FooterProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <footer className="flex flex-col items-center gap-8 pb-8  md:flex-row md:justify-between md:px-8 md:pb-6">
        <button
          onClick={() => {
            props.showRules(true);
          }}
          className="footer-button rounded-xl border-2 border-white border-opacity-50 px-8 py-2 text-lg uppercase tracking-widest text-white md:order-1"
          aria-label="rules"
        >
          rules
        </button>
        <button
          onClick={() => {
            localStorage.clear();
            props.setScore(0);
            props.setStart(true);
          }}
          className="footer-button rounded-xl border-2 border-white border-opacity-50 px-8 py-2 text-lg uppercase tracking-widest text-white"
          aria-label="reset"
        >
          reset
        </button>
      </footer>
    </div>
  );
}
