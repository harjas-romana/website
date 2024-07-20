import Camp from "@/components/Camp";
import Dates from "@/components/Dates";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Committee from "@/components/Commitee";
export default function Home() {
  return (
    <>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    <Dates/>
    <Committee/>
    </>
  )
}