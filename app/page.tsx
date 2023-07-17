import Footer from "@/components/Footer";
import Homepage from "@/components/pages/Homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prawsang | A Frontend Developer",
  description: "A frontend developer based in Bangkok.",
};

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  )
}