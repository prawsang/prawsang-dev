import { FC, SVGProps } from "react";

export default function Switch({
  onChange,
  value,
  IconOn,
  IconOff,
}: {
  onChange: (value: boolean) => void;
  value: boolean;
  IconOn?: FC<SVGProps<SVGElement>>;
  IconOff?: FC<SVGProps<SVGElement>>;
}) {
  return (
    <div
      className={`switch ${value === true && "on"}`}
      onClick={() => onChange(value)}
    >
      {IconOn && (
        <div className="switch-icon">
          <IconOn />
        </div>
      )}
      <div className="switch-knob" />
      {IconOff && (
        <div className="switch-icon">
          <IconOff />
        </div>
      )}
    </div>
  );
}