type ButtonProps = {
  icon: string;
  styles: string;
  position: string;
};

export default function Button({
  icon,
  styles,
  position,
}: ButtonProps): JSX.Element {
  return (
    <div className={`grid place-content-center ${position}`}>
      <button
        className={`rounded-full border-[16px] md:border-[20px] ${styles}`}
      >
        <div className="shadow-top grid h-20 w-20 place-content-center rounded-full bg-white md:h-28 md:w-28">
          <img src={icon} alt="" className="w-9 md:w-12" />
        </div>
      </button>
    </div>
  );
}
