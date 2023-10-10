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
      } top-0 left-0 fixed w-[100vw] h-[100vh] overflow-y-scroll z-[200] flex flex-col`}
    >
      <div
        className={`container  ${
          projectOpen ? "opacity-100" : "opacity-0"
        } pointer-events-none z-[250] transition-all duration-1000`}
      >
        <Filter2 opacity="0.6" />
      </div>
      <Curtains projectOpen={projectOpen} />
      <div
        className={`main-project-content w-full h-full overflow-y-auto overflow-x-hidden  p-2 md:p-8 ${
          projectOpen ? "opacity-100" : "opacity-0"
        } transition-all duration-500 delay-500 ease z-[300] flex flex-col items-center`}
      >
        <ImageBanner
          projectOpen={projectOpen}
          title={openData?.title}
          img={openData?.bannerImg}
        />
        <div
          className={`content w-full h-[50vh] flex flex-col md:flex-row justify-center items-center md:items-start translate-y-[100%] md:justify-between ${
            projectOpen
              ? "translate-y-[0%] opacity-100"
              : "translate-y-[100%] opacity-0"
          } transition-all duration-500 delay-500 ease`}
        >
          <div className="container w-full scale-75 md:scale-100 md:w-[20%] flex justify-start items-start p-0 md:p-4 order-3">
            <BackButton setProjectOpen={setProjectOpen} />
          </div>
          <div className="description w-full md:w-[50%] h-full flex flex-col p-4">
            <h2 className="text-primary text-lg md:text-2xl font-montserrat">
              Description
            </h2>
            <p className="text-tertiary font-montserrat text-sm md:text-base text-justify md:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum praesentium debitis quibusdam, aspernatur numquam eaque.
              Provident ut quisquam ipsa ipsam nemo tempora consequuntur fugit
              ipsum perferendis architecto inventore sequi necessitatibus, minus
              vitae magni adipisci sunt ullam possimus, quibusdam quidem
              repellat corrupti sint est modi. Deleniti corporis ipsam sapiente
              accusamus?
            </p>
          </div>
          <div className="tech-stack w-full md:w-[30%] p-4 flex flex-col">
            <h2 className="text-primary text-lg md:text-2xl font-montserrat">
              Technologies Used
            </h2>
            <div className="ButtonMenu w-full flex flex-wrap gap-4">
              <ButtonTech text="html" />
              <ButtonTech text="next.js" />
              <ButtonTech text="javascript" />
              <ButtonTech text="react" />
              <ButtonTech text="tailwind css" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectOverlay;
