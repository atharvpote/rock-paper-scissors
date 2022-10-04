type ButtonProps = {
  icon: string;
  styles: string;
  position: string;
  clickHandler?: () => void;
};

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <div className={`grid place-content-center ${props.position}`}>
      <button
        className={`rounded-full border-[16px] md:border-[20px] ${props.styles}`}
        onClick={props.clickHandler}
      >
        <div className="shadow-top grid h-20 w-20 place-content-center rounded-full bg-white md:h-28 md:w-28">
          <img src={props.icon} alt="" className="w-9 md:w-12" />
        </div>
      </button>
    </div>
  );
}
