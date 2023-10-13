"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { spawn } from "child_process";
import Link from "next/link";
interface menuProp {
  toggleMenu: any;
}

const Navbar: React.FC<menuProp> = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Text = "MENU MENU MENU";
  return (
    <>
      <Menu isOpen={isOpen} />
      <div
        className={`remove-def menu-btn-outer scale-75 md:scale-100 fixed p-2 w-20 h-20 rounded-full border-4  left-[50%] translate-x-[-50%] bottom-12 md:bottom-16 flex items-center justify-center ${
          isOpen ? "border-secondary" : "border-secondary"
        }`}
      >
        <div
          className={`remove-def group w-full h-full rounded-full  flex justify-center items-center font-bold ${
            isOpen ? "bg-secondary" : "bg-secondary"
          } transition-all duration-500 active:duration-200 ease-inc cursor-pointer hover:scale-[130%] active:scale-[85%] drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)]`}
          onClick={() => {
            setIsOpen(!isOpen);
            toggleMenu(!isOpen);
          }}
        >
          <div
            className={`rotate-text absolute z-[101] -top-10  ${
              isOpen ? "text-white opacity-0" : "text-primary opacity-100"
            }`}
          >
            {Text.split("").map((char, i) => (
              <div
                style={{ transform: `rotate(${i * 24}deg)` }}
                className="char-rotate font-montserrat"
                key={i}
              >
                {char}
              </div>
            ))}
          </div>
          {isOpen ? (
            <Image
              src="/images/close.png"
              alt="close"
              width={100}
              height={100}
              className="w-[40%] "
            />
          ) : (
            <Image
              src="/images/menu.png"
              alt="Menu"
              width={100}
              height={100}
              className="w-[40%] md:opacity-0  group-hover:opacity-100 transition-opacity duration-300 ease-inc"
            />
          )}
        </div>
      </div>
    </>
  );
};
interface menuDetail {
  isOpen: boolean;
}

const Menu: React.FC<menuDetail> = ({ isOpen }) => {
  return (
    <>
      <div
        className={`menu-container w-[100vw] h-[45vh] md:h-[60vh] md:p-4 px-4 md:px-12 flex flex-wrap gap-[3%] md:gap-[5%] fixed left-0  transition-all justify-center duration-[750ms] ease-inc ${
          isOpen
            ? "bottom-0 scale-100 blur-0"
            : "bottom-[-100%] scale-75 blur-lg"
        }`}
      >
        <Link
          href="/Landing"
          className="card w-[30%] md:w-[23%] h-32 md:h-60  overflow-hidden"
        >
          <div className="group card-inner w-full h-full border-4 border-secondary  rounded-tl-[50px] md:rounded-tl-[100px] rounded-br-[50px] md:rounded-br-[100px] flex justify-center items-center text-white text-base md:text-3xl font-monsterrat font-semibold tracking-widest hover:bg-secondary transition-all duration-300 hover:bg-opacity-50">
            Home
          </div>
        </Link>
        <Link
          href="/Project"
          className="card w-[34%] md:w-[23%] h-32 md:h-60  overflow-hidden"
        >
          <div className="card-inner w-full h-full border-4 border-secondary rounded-[50px] md:rounded-[100px]  flex justify-center items-center text-white text-base md:text-3xl font-monsterrat font-semibold tracking-widest hover:bg-secondary transition-all duration-300  hover:bg-opacity-50">
            Projects
          </div>
        </Link>
        <Link
          href="/About"
          className="card w-[30%] md:w-[23%] h-32 md:h-60  overflow-hidden"
        >
          <div className="card-inner w-full h-full border-4 border-secondary rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] flex justify-center items-center text-white text-base md:text-3xl font-monsterrat font-semibold tracking-widest hover:bg-secondary transition-all duration-300  hover:bg-opacity-50">
            About
          </div>
        </Link>
      </div>
    </>
  );
};
export default Navbar;
