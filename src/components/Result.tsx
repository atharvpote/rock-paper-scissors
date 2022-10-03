import Button from "./Button";

type ResultProps = {
  buttons: {
    [key: string]: { icon: string; styles: string };
  };
};

export default function Result({ buttons }: ResultProps): JSX.Element {
  return (
    <div className="flex w-72 -translate-y-16 justify-between">
      <div className="h-28 w-28 rounded-full bg-[#192845]">
        <Button
          icon={buttons.rock.icon}
          styles={buttons.rock.styles}
          position=""
        />
      </div>
      <div className="h-28 w-28 rounded-full bg-[#192845]">
        <Button
          icon={buttons.paper.icon}
          styles={buttons.paper.styles}
          position=""
        />
      </div>
    </div>
  );
}
