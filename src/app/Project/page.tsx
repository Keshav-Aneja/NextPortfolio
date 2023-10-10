"use client";
import Filter from "../components/Filter";
import Filter2 from "../components/Filter2";
import Navbar from "../sections/Navbar";
import ProjectTable from "../sections/ProjectTable";
import ProjectOverlay from "../sections/ProjectOverlay";
import { useState } from "react";
import Image from "next/image";
export default function Project() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(-1);
  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center">
        <Filter />
        <Filter2 />
        <div
          className={`project-content  transition-all duration-[750ms] ease-inc  ${
            menuOpen
              ? "translate-y-[-50%] scale-[95%]  blur-sm pointer-events-none"
              : "-translate-y-16 md:translate-y-0 scale-100 blur-0 pointer-events-auto"
          } w-[90%] h-[80%] md:h-[100%]`}
        >
          <div className=" heading text-secondary text-[max(5vw,3rem)] font-coolvetica tracking-wider">
            Projects
          </div>
          <div className="line bg-primary w-[70%] h-[2px] mb-6"></div>
          <ProjectTable
            setProjectOpen={setProjectOpen}
            setOpenProjectId={setOpenProjectId}
          />
        </div>
        <ProjectOverlay
          projectOpen={projectOpen}
          setProjectOpen={setProjectOpen}
          openProjectId={openProjectId}
        />
      </div>

      <Navbar toggleMenu={setMenuOpen} />
    </>
  );
}
