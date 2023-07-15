import "./globals.scss";
import type { Metadata } from "next";
import { Open_Sans, Roboto_Mono } from "next/font/google";

export const openSans = Open_Sans({ subsets: ["latin"] });
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// export const metadata: Metadata = {
//   title: "Prawsang | A Frontend Developer",
//   description: "A frontend developer based in Bangkok.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} font-sans`}>{children}</body>
    </html>
  );
}
