import React from "react";
import { Roboto_Mono } from "next/font/google";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function Mono({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <span className={`${robotoMono.className} ${className}`}>{children}</span>
  )
}