import { useNavigate } from "react-router-dom";

type FooterProps = {
  setScore: React.Dispatch<number>;
};
export default function Footer(props: FooterProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-4xl">
      <footer className="flex flex-col items-center gap-8 pb-8  md:flex-row md:justify-between md:px-8 md:pb-6">
        <button
          onClick={(): void => {
            navigate("/rules");
          }}
          className="footer-button rounded-xl border-2 border-white border-opacity-50 px-8 py-2 text-lg uppercase tracking-widest text-white md:order-1"
        >
          rules
        </button>
        <button
          onClick={(): void => {
            localStorage.clear();
            props.setScore(0);
            navigate("/", { replace: true });
          }}
          className="footer-button rounded-xl border-2 border-white border-opacity-50 px-8 py-2 text-lg uppercase tracking-widest text-white"
        >
          reset
        </button>
      </footer>
    </div>
  );
}
