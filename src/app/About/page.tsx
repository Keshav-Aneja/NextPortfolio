"use client";
import Navbar from "../sections/Navbar";
import ButtonOutline from "../components/ButtonOutline";
import { useState, useRef } from "react";
import Filter from "../components/Filter";
import Image from "next/image";
import Filter2 from "../components/Filter2";
import { motion, useScroll, useSpring } from "framer-motion";
import AboutDetails from "../sections/AboutDetails";
export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const constraintsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Filter />
      <Filter2 />
      <div
        className={`about-content w-[100%] h-[100%] ${
          menuOpen
            ? "translate-y-[-50%] scale-[95%]  blur-sm pointer-events-none"
            : "-translate-y-0 md:translate-y-0 scale-100 blur-0 pointer-events-auto"
        } transition-all duration-[750ms] ease-inc flex flex-col justify-center items-center py-8 px-4 md:px-16`}
        ref={constraintsRef}
      >
        <AboutDetails />
        {/* <div className="line bg-primary w-[80%] h-[2px] mb-6 self-start"></div> */}
      </div>
      <Navbar toggleMenu={setMenuOpen} refcontent={constraintsRef} />
    </>
  );
}
