import React from "react";
import { robotoMono } from "@/app/layout";

export default function Mono({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <span className={`${robotoMono.className} ${className}`}>{children}</span>
  )
}