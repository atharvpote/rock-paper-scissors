import Button from "./Button";

type ResultProps = {
  buttons: {
    [key: string]: { icon: string; styles: string };
  };
};

export default function Result({ buttons }: ResultProps): JSX.Element {
  return (
    <div className="flex w-[17rem] flex-wrap justify-between gap-y-12 md:w-96">
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
        <div className="mb-6">
          <p className="text-center text-6xl uppercase">you win</p>
        </div>
        <button className="dark-text mx-auto block rounded-lg bg-white px-20 py-4 text-center uppercase ">
          play again
        </button>
      </div>
    </div>
  );
}
