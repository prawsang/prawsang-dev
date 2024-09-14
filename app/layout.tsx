import "./globals.scss";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.className}`}>{children}</body>
    </html>
  );
}
