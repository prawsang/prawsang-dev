"use client";

import { useState } from "react";
import "./globals.scss";
import { Syne } from "next/font/google";
import Navbar from "@/components/nav/Navbar";

const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const onNavLinkClick = () => {};

  return (
    <html lang="en">
      <body className={`${syne.className} ${darkMode && "dark-mode"}`}>
        <Navbar
          darkMode={darkMode}
          onDarkModeChange={() => setDarkMode(!darkMode)}
          onNavLinkClick={onNavLinkClick}
        />
        {children}
      </body>
    </html>
  );
}
