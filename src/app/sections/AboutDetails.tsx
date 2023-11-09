"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ButtonOutline from "../components/ButtonOutline";
import ProgressCircular from "../components/ProgressCircular";
import ButtonPrime from "../components/ButtonPrime";
import SkillButton from "../components/SkillButton";
import ExperienceCard from "../components/ExperienceCard";
import data from "../About/SkillPage.json";
import Image from "next/image";
export default function AboutDetails() {
  return (
    <>
      <div className="content-container w-full h-[90vh] overflow-y-scroll z-[600]">
        <div className="heading text-secondary  text-[max(5vw,3rem)] font-coolvetica self-start">
          About Me
        </div>
        <div className="line w-[80%] h-[2px] bg-primary"></div>
        <div className="whitebox w-full border-0 border-white mb-4 py-8 flex justify-between">
          <div className="about-description font-montserrat w-full lg:w-[60%] text-sm  md:text-base text-justify leading-6 md:leading-8 tracking-wide">
            <Image
              src="/images/Profile.png"
              alt="profile"
              width={430}
              height={700}
              className="lg:hidden w-[40%] h-auto rounded-[10px] rounded-bl-[50px] float-right ml-2 md:ml-4"
            />
            Hello, I&apos;m Keshav Aneja, a second-year computer science student
            at Vellore Institute of Technology, deeply immersed in the world of
            full-stack web development. My journey began with exploring the
            captivating realm of frontend development, where I delved into
            technologies like React and Next.j s, crafting innovative projects
            along the way. My current focus is on mastering the backend, with
            the goal of creating full-stack applications that cater to a wide
            audience. Coding and graphic design serve as my creative outlets,
            allowing me to transform ideas into visually appealing and
            functional solutions. The satisfaction of bringing creativity to
            life through lines of code and eye-catching designs is truly
            fulfilling for me.
            <br />
            <br />
            <ButtonOutline>Resume</ButtonOutline>
          </div>

          <Image
            src="/images/Profile.png"
            alt="profile"
            width={430}
            height={700}
            className="big-img w-[0%] lg:w-[30%] h-auto rounded-[20px] rounded-bl-[150px]"
          />
        </div>
        <div className="heading text-secondary  text-[max(5vw,3rem)] font-coolvetica self-start">
          Skills
        </div>
        <div className="line w-[80%] h-[2px] bg-primary"></div>

        <div className="whitebox w-full h-max lg:h-[60vh] mb-4 py-8">
          <div className="skill-container w-full md:h-full md:items-start flex flex-wrap justify-center gap-4 md:gap-6">
            {data.map((item, i) => (
              <SkillButton
                skill={item.skill}
                color={item.color}
                img={`/images/${item.img}`}
                key={i}
                index={i}
              />
            ))}
          </div>
        </div>
        <div className="heading text-secondary  text-[max(5vw,3rem)] font-coolvetica self-start">
          Experience
        </div>
        <div className="line w-[80%] h-[2px] bg-primary"></div>
        <div className="whitebox w-full h-[80vh] md:h-[60vh] mb-4 py-8">
          <ExperienceCard
            duration={"NOVEMBER 2023 - PRESENT"}
            position={"Frontend Developer"}
            company={"AuraX"}
            role={
              "Implementing responsive design techniques to create a consistent user experience on both desktop and mobile devices. Optimising the performance of the front-end code for faster loading times and improved user experience. Collaborating with back-end developers to integrate front-end code with server-side logic."
            }
            tech={[
              "ReactJS",
              "NEXT.JS",
              "Tailwind CSS",
              "Javascript",
              "TypeScript",
              "Framer-Motion",
            ]}
          />
          <ExperienceCard
            duration={"JULY 2023 - PRESENT"}
            position={"Junior Core - Tech"}
            company={"Computer Society of India"}
            role={
              "Implementing responsive design techniques to create a consistent user experience on both desktop and mobile devices. Optimising the performance of the front-end code for faster loading times and improved user experience. Collaborating with back-end developers to integrate front-end code with server-side logic."
            }
            tech={[
              "ReactJS",
              "NEXT.JS",
              "Tailwind CSS",
              "Javascript",
              "TypeScript",
              "Framer-Motion",
              "Web Sockets",
            ]}
          />
          <ExperienceCard
            duration={"JULY 2023 - PRESENT"}
            position={"Junior Core - Tech"}
            company={"Mozilla Firefox Club"}
            role={
              "Implementing responsive design techniques to create a consistent user experience on both desktop and mobile devices. Optimising the performance of the front-end code for faster loading times and improved user experience. Collaborating with back-end developers to integrate front-end code with server-side logic."
            }
            tech={["HTML", "CSS", "Tailwind CSS", "ReactJS", "Javascript"]}
          />
        </div>
      </div>
    </>
  );
}
