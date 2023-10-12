import { useState } from "react";
import Filter2 from "../components/Filter2";
import ImageBanner from "./ImageBanner";
import ButtonTech from "../components/ButtonTech";
import Image from "next/image";
import Curtains from "../components/Curtains";
import BackButton from "../components/BackButton";
import data from "../Project/Project.json";

interface ProjectProps {
  children?: any;
  projectOpen: boolean;
  setProjectOpen: any;
  openProjectId: Number;
}

const ProjectOverlay: React.FC<ProjectProps> = ({
  projectOpen,
  setProjectOpen,
  openProjectId,
}) => {
  const openData = data.find((prodata) => prodata.id === openProjectId);
  console.log(openData);

  return (
    <div
      className={`ProjectBase ${
        projectOpen ? "pointer-events-auto" : "pointer-events-none"
      } top-0 left-0 fixed w-[100vw] h-[100vh] overflow-hidden z-[200] flex flex-col`}
    >
      <div className="content-main-all w-full h-full overflow-x-hidden overflow-y-scroll">
        <div
          className={`container  ${
            projectOpen ? "opacity-100" : "opacity-0"
          } pointer-events-none z-[250] transition-all duration-1000`}
        >
          <Filter2 opacity="0.6" />
        </div>
        <Curtains projectOpen={projectOpen} />
        <div className="absolute bottom-10 left-10 z-[600]">
          <BackButton setProjectOpen={setProjectOpen} />
        </div>
        <div
          className={`main-project-content w-full h-full   p-2 md:p-8 ${
            projectOpen ? "opacity-100" : "opacity-0"
          } transition-all duration-500 delay-500 ease z-[300] flex flex-col items-center`}
        >
          <div
            className={`content w-full h-[50vh] flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between ${
              projectOpen
                ? "translate-y-[0%] opacity-100"
                : "translate-y-[100%] opacity-0"
            } transition-all duration-500 delay-500 ease`}
          >
            <div className="container w-full h-full flex justify-center items-center">
              <ImageBanner
                projectOpen={projectOpen}
                title={openData?.title}
                img={openData?.bannerImg}
              />
            </div>
            <div className="description w-full p-4 md:w-[50%]">
              <h2 className="text-primary text-lg md:text-2xl font-montserrat">
                Description
              </h2>
              <p className="text-tertiary font-montserrat text-sm md:text-base text-justify">
                {openData?.description}
              </p>
            </div>
            <div className="tech-stack w-full p-4 md:w-[30%]">
              <h2 className="text-primary text-lg md:text-2xl font-montserrat">
                Technologies Used
              </h2>
              <div className="ButtonMenu w-full flex flex-wrap gap-4">
                {openData?.tech.map((tech, i) => (
                  <ButtonTech text={tech} key={i} />
                ))}
                <ButtonTech text="html" />
                <ButtonTech text="next.js" />
                <ButtonTech text="javascript" />
                <ButtonTech text="react" />
                <ButtonTech text="tailwind css" />
              </div>
            </div>
          </div>
          <Image src="/images/fork.jpg" alt="" width={2000} height={2000} />
          <Image src="/images/fork.jpg" alt="" width={2000} height={2000} />
          <Image src="/images/fork.jpg" alt="" width={2000} height={2000} />
          <div className="empty-box w-full h-[20vh] translate-y-[100%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlay;
