"use client";
import { useState } from "react";
import Navbar from "../sections/Navbar";
import Image from "next/image";
import Link from "next/link";
import SocialMenu from "../components/SocialMenu";
import BackgroundProps from "../components/BackgroundProps";
import Filter from "../components/Filter";
import Filter2 from "../components/Filter2";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <Filter />
      <Filter2 />
      <div className="hero-container h-full w-full">
        <div
          className={`main-content text-[max(5vw,3rem)] w-full h-full text-transparent flex flex-col justify-center items-center  ${
            menuOpen
              ? "translate-y-[-50%] scale-[95%]  blur-sm pointer-events-none"
              : "-translate-y-16 md:translate-y-0 scale-100 blur-0 pointer-events-auto"
          }
          ${
            socialOpen ? "" : ""
          } transition-all duration-[750ms] ease-inc font-coolvetica tracking-widest text-center relative  scale-[90%] md:scale-100`}
          style={{ fontFamily: "coolvetica" }}
        >
          Welcome to my Digital World
          <br />
          <div className="sub relative">
            I&apos;m <br className="md:hidden" /> Keshav Aneja
            <span className="no-outline w-full md:w-fit text-primary absolute right-[3px] md:right-[5px] bottom-[3px]">
              Keshav Aneja
            </span>
          </div>
          <div className="sub-heading no-outline text-tertiary text-xl tracking-widest mb-16 font-montserrat font-medium">
            I&apos;m a Frontend Developer & Graphic Designer
          </div>
          <div className="links flex w-[70%] md:w-[40%] lg:w-[30%] justify-between">
            <div className="project">
              <Link
                href="../About"
                className="remove-def flex flex-col justify-center items-center hover:scale-110 transition-all duration-300 ease-linear"
              >
                <Image
                  src="/images/arrow.png"
                  width={80}
                  height={80}
                  alt="arrow"
                ></Image>
                <p className="no-outline text-xs md:text-sm text-tertiary tracking-widest font-montserrat">
                  ABOUT ME
                </p>
              </Link>
            </div>
            <div className="About ">
              <Link
                href="#"
                className="remove-def flex flex-col justify-center items-center hover:scale-110 transition-all duration-300 ease-linear"
                onClick={() => setSocialOpen(!socialOpen)}
              >
                <Image
                  src="/images/arrow.png"
                  width={80}
                  height={80}
                  alt="arrow"
                  className="rotate-180"
                ></Image>
                <p className="no-outline text-xs md:text-sm text-[#aeaeae] tracking-widest font-montserrat">
                  CONNECT WITH ME
                </p>
              </Link>
            </div>
          </div>
        </div>
        <BackgroundProps />
        <SocialMenu socialOpen={socialOpen} />
        <Navbar toggleMenu={setMenuOpen} />
      </div>
    </div>
  );
}
