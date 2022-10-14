import { Link } from "react-router-dom";
import title from "../assets/logo.svg";

type Props = {
  score: number;
};

export default function Header(props: Props): JSX.Element {
  return (
    <div className="mx-auto max-w-3xl pt-8">
      <header className="mx-8 flex justify-between gap-4 rounded-lg border-4 border-white border-opacity-25 p-4 md:border-2">
        <Link to="/" className="flex basis-24 items-center md:basis-32">
          <div className="title-margin ">
            <img src={title} alt="" />
          </div>
          <h1 className="h-0 w-0 overflow-hidden">Rock,Paper,Scissors</h1>
        </Link>
        <div className="flex flex-col items-center justify-center rounded-md bg-white px-5 py-2 md:px-8">
          <h2 className="score-text text-xs uppercase tracking-widest">
            score
          </h2>
          <span className="dark-text text-4xl font-bold md:text-5xl">
            {props.score}
          </span>
        </div>
      </header>
    </div>
  );
}
