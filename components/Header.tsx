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
      <div className="flex justify-start items-center text-4xl sm:text-5xl gap-x-4 font-bold">
        <div>
          <Mono className="text-base-300">{`<`}</Mono>
        </div>
        <div>
          <Mono className="text-base-800 text-center block">{children}</Mono>
        </div>
        <div>
          <Mono className="text-base-300">{`>`}</Mono>
        </div>
      </div>
    </div>
  );
}
