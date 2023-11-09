import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
interface SkillButtonProps {
  skill: string;
  color: string;
  img: string;
  index: number;
}
const SkillButton: React.FC<SkillButtonProps> = ({
  skill,
  color,
  img,
  index,
}) => {
  return (
    <motion.div
      className={`remove-def group w-[46%] md:w-[30%] lg:w-[15%] aspect-[1.8] px-4 md:px-4 py-2 rounded-3xl border-2  flex flex-col justify-center items-center relative cursor-pointer md:scale-100 hover:bg-[#da7b5668] transition-all duration-200 ease-linear`}
      style={{ borderColor: color }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="w-[20%]">
        <Image
          src={img}
          alt={skill}
          width={150}
          height={150}
          className={` ${
            skill === "NEXT.JS" || skill === "Web Sockets" ? "invert" : ""
          }`}
        />
      </div>
      <span className="font-montserrat uppercase tracking-wide mt-2 text-sm md:text-base text-center">
        {skill}
      </span>
    </motion.div>
  );
};
export default SkillButton;
{
  /* <div
      className={`remove-def group w-fit px-4 md:px-12 py-2 rounded-3xl border-b-2 border-r-2  flex justify-between items-center relative cursor-pointer scale-[75%] md:scale-100`}
      style={{ borderColor: color }}
    >
      <div className="absolute w-[28%] left-2 group-hover:scale-125 transition-all duration-300 ease-inc">
        <Image
          src={img}
          alt={skill}
          width={150}
          height={150}
          className={` ${
            skill === "NEXT.JS" || skill === "Web Sockets" ? "invert" : ""
          }`}
        />
      </div>
      <span className="ml-12 md:ml-12 font-montserrat uppercase tracking-wide">
        {skill}
      </span>
    </div> */
}
