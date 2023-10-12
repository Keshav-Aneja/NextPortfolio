import { useState } from "react";
import Filter2 from "../components/Filter2";
import ImageBanner from "./ImageBanner";
import ButtonTech from "../components/ButtonTech";
import Image from "next/image";
import Curtains from "../components/Curtains";
import BackButton from "../components/BackButton";
import data from "../Project/Project.json";
import ButtonOutline from "../components/ButtonOutline";

interface ProjectProps {
  children?: any;
  projectOpen: boolean;
  setProjectOpen: any;
  openProjectId: Number;
}

const ProjectPopup: React.FC<ProjectProps> = ({
  projectOpen,
  setProjectOpen,
  openProjectId,
}) => {
  const openData = data.find((prodata) => prodata.id === openProjectId);
  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] overflow-hidden z-[500] ${
        projectOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Curtains projectOpen={projectOpen}></Curtains>
      <div
        className={`main-content-project w-[100vw] h-[100vh] overflow-x-hidden bg-black overflow-y-scroll p-2 md:p-8 ${
          projectOpen
            ? "translate-y-[0%] opacity-100 pointer-events-auto "
            : "translate-y-[100%] opacity-0 pointer-events-none"
        } transition-all duration-500 delay-500 ease`}
      >
        <ImageBanner
          projectOpen={projectOpen}
          title={openData?.title}
          img={openData?.bannerImg}
        ></ImageBanner>
        <div className="Header-wrapper w-[100%] h-[50vh] mt-8">
          <div className="head-content w-full flex flex-col lg:flex-row justify-between gap-4">
            <div className="backBtn w-[100%] lg:w-[20%] scale-75 md:scale-100">
              <BackButton setProjectOpen={setProjectOpen} />
            </div>
            <div className="description w-[100%]  lg:w-[50%]">
              <h2 className="text-primary text-lg md:text-2xl font-montserrat">
                Description
              </h2>
              <p className="text-tertiary font-montserrat text-sm md:text-base text-justify w-[100%] lg:w-[80%]">
                {openData?.description}
              </p>
            </div>
            <div className="techstack w-[100%] lg:w-[25%]">
              <h2 className="text-primary text-lg md:text-2xl font-montserrat">
                Technologies Used
              </h2>
              <div className="ButtonMenu w-full flex flex-wrap gap-4">
                {openData?.tech.map((tech, i) => (
                  <ButtonTech key={i} text={tech} />
                ))}
              </div>
            </div>
          </div>
          <div className="button-container w-[100%] md:w-[50%] flex m-auto justify-center gap-8 mt-8 mb-8 md:mb-0">
            <ButtonOutline arrowdir="right">Github</ButtonOutline>
            <ButtonOutline arrowdir="right">Demo</ButtonOutline>
          </div>
          <div className="scroll-down md:flex justify-center scale-50 items-center mt-4 hidden ">
            <div className="text-arrow  text-2xl text-tertiary font-medium">
              S C R O L L
            </div>
            <Image
              src="/images/arrow-w.png"
              width={100}
              height={100}
              alt="arrow"
              className="brightness-75"
            />
          </div>
        </div>
        {openData?.imgBanners.map((img, i) => (
          <>
            <div className="white w-[100%]  mb-6 flex justify-center items-center">
              <div className="text text-black font-coolvetica text-4xl">
                <Image
                  src={`/images/${openData.title}/${img}`}
                  height={1080}
                  width={1920}
                  className="w-full h-full"
                  alt="projectImg"
                ></Image>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default ProjectPopup;
