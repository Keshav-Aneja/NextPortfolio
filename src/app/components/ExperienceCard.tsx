import { motion } from "framer-motion";
interface ExpCard {
  duration: string;
  position: string;
  company: string;
  role: string;
  tech: Array<string>;
}
const ExperienceCard: React.FC<ExpCard> = ({
  duration,
  position,
  company,
  role,
  tech,
}) => {
  return (
    <motion.div
      className="outer-cardbox w-full lg:w-[75%] font-montserrat hover:bg-[#df78451b] p-4 rounded-lg cursor-pointer mb-4 transition-all duration-200 ease-linear"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="inner-content flex justify-between">
        <div className="duration-panel w-[30%] text-tertiary hidden md:block">
          {duration}
        </div>
        <div className="main-content-panel w-full md:w-[70%]">
          <div className="position text-2xl text-secondary font-semibold">
            {position}
          </div>
          <div className="company text-xl text-primary font-semibold">
            {company}
          </div>
          <div className="duration-panel text-tertiary md:hidden">
            {duration}
          </div>
          <div className="role text-[#d3d3d3]">{role}</div>
          <div className="tech-stack flex flex-wrap gap-2 mt-4">
            {tech.map((item, i) => (
              <div
                className="skill-button px-4 py-2 bg-[#2f2d2d6a] text-orange-400 w-fit rounded-full border-[1px] border-[#f8f7f740] text-sm"
                key={i}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
