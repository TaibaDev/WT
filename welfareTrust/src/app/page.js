"use client";
import HeroSection from "@/components/heroSection";
import Image from "next/image";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init()
 }, [])
  return <div>
    <HeroSection />
  </div>;
}
