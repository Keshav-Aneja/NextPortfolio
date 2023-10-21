import Image from "next/image";
import { motion } from "framer-motion";
interface CardProp {
  id: Number;
  title: String;
  img: String;
  setProjectOpen: any;
  setOpenProjectId: any;
}
const ProjectCard: React.FC<CardProp> = ({
  title,
  img,
  setProjectOpen,
  id,
  setOpenProjectId,
}) => {
  return (
    <motion.div
      className="group w-[90%] md:w-[50%] lg:w-[30%] border-[0px] border-tertiary aspect-square flex flex-col justify-between gap-4 p-4 rounded-xl hover:border-primary transition-all duration-300 ease-in-out] scale-90"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="head flex flex-col gap-2 md:gap-4">
        <div className="Project-heading text-tertiary text-4xl font-coolvetica tracking-wide font-normal group-hover:text-primary">
          {title}
        </div>
        <div className="project-image">
          <Image
            src={`/images/${img}`}
            width={500}
            height={500}
            alt="Project Image"
            className="w-full aspect-[1920/1080] rounded-xl border-[2px] border-tertiary group-hover:border-primary"
          />
        </div>
      </div>
      <div
        className="remove-def view-btn border-2 border-tertiary rounded-xl text-center py-4 hover:bg-secondary  hover:border-secondary uppercase cursor-pointer group-hover:border-primary  hover:text-white transition-all duration-300 ease-in-out"
        onClick={() => {
          setProjectOpen(true);
          setOpenProjectId(id);
        }}
      >
        View Project
      </div>
    </motion.div>
  );
};
export default ProjectCard;
