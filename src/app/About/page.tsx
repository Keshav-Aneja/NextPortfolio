"use client";
import Navbar from "../sections/Navbar";
import ButtonOutline from "../components/ButtonOutline";
import { useState } from "react";
import Filter from "../components/Filter";
import Image from "next/image";
import Filter2 from "../components/Filter2";
export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className={`about-content w-[100vw] h-[100vh] ${
          menuOpen
            ? "translate-y-[-50%] scale-[95%]  blur-sm pointer-events-none"
            : "-translate-y-16 md:translate-y-0 scale-100 blur-0 pointer-events-auto"
        } transition-all duration-[750ms] ease-inc flex justify-center items-center`}
      >
        <Filter />
        <Filter2 />
        <div className="content-container w-[100%] md:w-[80%] h-[80%]  relative flex flex-col md:flex-row md:justify-between   items-center justify-center  scale-[90%] md:scale-100">
          <div className="left-content w-[100%] md:w-[70%] h-full flex flex-col justify-start md:justify-center items-center md:items-start">
            <div className="heading text-secondary  text-[max(5vw,3rem)] font-coolvetica">
              About Me
            </div>
            <div className="line bg-primary w-[80%] h-[2px] mb-6"></div>
            <div className="description w-[80%] font-montserrat tracking-wider leading-6 md:leading-8 text-justify mb-16 md:mb-8  md:text-base text-sm">
              <div
                className="dp-img-container visible md:hidden w-[35%] md:w-[30%] h-[40%] md:h-[70%] rounded-xl md:rounded-bl-[150px] rounded-br-[50px] md:rounded-br-0 mr-4 md:mr-0 overflow-hidden relative float-left"
                style={{ backgroundImage: "url(/images/Profile.png)" }}
              ></div>
              A first-year Computer Science student. Currently, I am diving deep
              into frontend development and exploring the exciting world of web
              design. My ultimate goal is to become a versatile fullstack
              developer. I am driven by my passion for embracing and mastering
              various new technologies. Coding and graphic designing are my
              creative outlets, where I find joy in transforming ideas into
              visually appealing and functional solutions.
            </div>
            <ButtonOutline>Cirriculum Vitae</ButtonOutline>
          </div>
          <div
            className="dp-img-container hidden md:block w-[30%] h-[70%] rounded-xl rounded-bl-[150px] overflow-hidden relative"
            style={{ backgroundImage: "url(/images/Profile.png)" }}
          ></div>
          <div className="BackgroundDrop w-80 h-80 rounded-full bg-tertiary blur-[150px] absolute bottom-32 right-72 -z-10"></div>
          <FloatingCircle />
        </div>
      </div>
      <Navbar toggleMenu={setMenuOpen} />
    </>
  );
}
function FloatingCircle() {
  return (
    <div className="w-[150px] h-[45%]  absolute -z-10 md:z-10 -right-6 md:bottom-32 bottom-[62%] md:right-72 flex justify-between items-center flex-wrap opacity-40 md:opacity-100">
      {Array.from({ length: 12 }, (_, index) => (
        <div
          key={index}
          className="circle-bounce w-[40px] aspect-square rounded-full bg-primary md:blur-[1px] blur-[3px] hover:bg-secondary  transition-all duration-300 ease-linear"
        ></div>
      ))}
    </div>
  );
}
