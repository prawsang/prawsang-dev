import React from "react";
import Mono from "./Mono";

export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex justify-start align-end text-5xl gap-x-4 font-bold">
        <div>
          <Mono className="text-base-300">{`<`}</Mono>
        </div>
        <div>
          <Mono className="text-base-800">{children}</Mono>
        </div>
        <div>
          <Mono className="text-base-300">{`>`}</Mono>
        </div>
      </div>
    </div>
  );
}
