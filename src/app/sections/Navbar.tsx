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
        className={`menu-btn-outer scale-75 md:scale-100 fixed p-2 w-20 h-20 rounded-full border-4  left-[50%] translate-x-[-50%] bottom-12 md:bottom-16 flex items-center justify-center ${
          isOpen ? "border-[#8fa8ae]" : "border-secondary"
        }`}
      >
        <div
          className={`group w-full h-full rounded-full  flex justify-center items-center font-bold ${
            isOpen ? "bg-[#65858b]" : "bg-secondary"
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
              className="w-[40%]"
            />
          ) : (
            <Image
              src="/images/menu.png"
              alt="Menu"
              width={100}
              height={100}
              className="w-[40%] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-inc"
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
        className={`menu-container w-[100vw] h-[60vh] p-4 px-12 flex flex-wrap gap-[2%] fixed left-0  transition-all duration-[750ms] ease-inc ${
          isOpen
            ? "bottom-0 scale-100 blur-0"
            : "bottom-[-100%] scale-75 blur-lg"
        }`}
      >
        <div className="card w-[23%] aspect-[500/333]  overflow-hidden">
          <div className="card-inner w-full h-full">
            <p className="text-xl font-bold">Home</p>
            <Image
              src="https://images.unsplash.com/photo-1696587524422-b7ca5ce5c7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-[60%] object-cover rounded-xl"
            ></Image>
          </div>
        </div>
        <div className="card w-[23%] aspect-[500/333]  overflow-hidden">
          <div className="card-inner w-full h-full">
            <p className="text-xl font-bold">About Me</p>
            <Image
              src="https://images.unsplash.com/photo-1696587524422-b7ca5ce5c7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-[60%] object-cover rounded-xl"
            ></Image>
          </div>
        </div>
        <div className="card w-[23%] aspect-[500/333]  overflow-hidden">
          <div className="card-inner w-full h-full">
            <Link href="/Project">
              <p className="text-xl font-bold">Projects</p>
              <Image
                src="https://images.unsplash.com/photo-1696587524422-b7ca5ce5c7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[60%] object-cover rounded-xl"
              ></Image>
            </Link>
          </div>
        </div>
        <div className="card w-[23%] aspect-[500/333]  overflow-hidden">
          <div className="card-inner w-full h-full">
            <p className="text-xl font-bold">Blogs</p>
            <Image
              src="https://images.unsplash.com/photo-1696587524422-b7ca5ce5c7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-[60%] object-cover rounded-xl"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
