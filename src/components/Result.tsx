import { useContext } from "react";
import GlobalContext, { ContextValue } from "../context/GlobalContext";
import Button from "./Button";

type ResultProps = {
  buttons: {
    [key: string]: { icon: string; styles: string };
  };
};

export default function Result({ buttons }: ResultProps): JSX.Element {
  const { dispatch } = useContext(GlobalContext) as ContextValue;

  return (
    <div className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[40rem] md:items-center">
      {/* When play again is not visible */}
      {/* <div className="flex min-w-[17rem] max-w-xs flex-wrap justify-between gap-y-12 px-4 md:min-w-[27rem] md:items-center"> */}
      <div className="flex flex-col items-center gap-8 md:order-1">
        <div className="winner-shadow grid h-28 w-28 place-content-center rounded-full bg-[#192845] md:order-1 md:h-36 md:w-36">
          <Button
            icon={buttons.rock.icon}
            styles={buttons.rock.styles}
            position=""
          />
        </div>
        <div>
          <p className="uppercase">you picked</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 md:order-3">
        <div className="grid h-28 w-28 place-content-center rounded-full bg-[#192845] md:order-1 md:h-36 md:w-36">
          <Button
            icon={buttons.paper.icon}
            styles={buttons.paper.styles}
            position=""
          />
        </div>
        <div>
          <p className="uppercase">the house picked</p>
        </div>
      </div>
      <div className="basis-full md:order-2 md:basis-auto">
        {/* when it's visible */}
        {/* <div className="md:0 basis-full md:order-2 md:basis-0 md:overflow-hidden"> */}
        <div className="mb-6">
          <p className="text-center text-6xl uppercase md:text-4xl">you lose</p>
        </div>
        <button
          className="dark-text mx-auto block rounded-lg bg-white px-16 py-4 text-center uppercase tracking-widest md:py-3  md:px-10"
          onClick={(): void => {
            dispatch({ type: "switchToStart" });
          }}
        >
          play again
        </button>
      </div>
    </div>
  );
}
