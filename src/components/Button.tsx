export default function Button({
  icon,
  styles,
  position,
}: {
  icon: string;
  styles: string;
  position: string;
}) {
  return (
    <div className={`absolute grid place-content-center ${position}`}>
      <button
        className={`rounded-full border-[16px] md:border-[20px] ${styles}`}
      >
        <div className="shadow-top grid h-24 w-24 place-content-center rounded-full bg-white md:h-28 md:w-28">
          <img src={icon} alt="" className="w-10 md:w-12" />
        </div>
      </button>
    </div>
  );
}
