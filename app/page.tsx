import { Features } from "@/components/Features";
import { GetApp } from "@/components/GetApp";
import {Camp} from "@/components/Camp";
import { Guide } from "@/components/Guide";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    </>
  )
}
