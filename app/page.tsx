import Camp from "@/components/Camp";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { Guide } from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <Footer/>
    </>
  )
}
