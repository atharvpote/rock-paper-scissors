import Button from "./Button";

import triangle from "../assets/bg-triangle.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import rock from "../assets/icon-rock.svg";

export default function Start() {
  const buttons = [
    {
      icon: paper,
      styles: "border-blue box-shadow-blue",
      position: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    },
    {
      icon: scissors,
      styles: "border-yellow box-shadow-yellow",
      position: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    },
    {
      icon: rock,
      styles: "border-red box-shadow-red",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    },
  ];

  return (
    <div className="relative w-44 md:w-60">
      <img src={triangle} alt="" />
      {buttons.map(({ icon, styles, position }, index) => (
        <Button key={index} icon={icon} styles={styles} position={position} />
      ))}
    </div>
  );
}
