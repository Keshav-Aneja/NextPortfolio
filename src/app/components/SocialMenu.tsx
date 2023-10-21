import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
interface SocialProps {
  socialOpen: boolean;
}
const variants = {
  openSocialMenu: {
    top: 6,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closeSocialMenu: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variantsli = {
  openSocialMenu: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 50 },
    },
  },
  closeSocialMenu: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const SocialMenu: React.FC<SocialProps> = ({ socialOpen }) => {
  return (
    <motion.div
      className={`social-menu scale-75 md:scale-100 w-[100%] lg:w-[50%] h-16  absolute left-[50%] translate-x-[-50%] z-100 flex justify-evenly items-center top-[-100%]`}
      animate={socialOpen ? "openSocialMenu" : "closeSocialMenu"}
      variants={variants}
    >
      <Link
        href="https://github.com/Keshav-Aneja"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <motion.li
          animate={socialOpen ? "openSocialMenu" : "closeSocialMenu"}
          variants={variantsli}
          style={{ listStyleType: "none" }}
        >
          <Image src="/images/github.png" alt="" width={25} height={25}></Image>
        </motion.li>
      </Link>
      <Link
        href="https://twitter.com/Keshav__Aneja"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        {" "}
        <motion.li
          animate={socialOpen ? "openSocialMenu" : "closeSocialMenu"}
          variants={variantsli}
          style={{ listStyleType: "none" }}
        >
          <div className="content bg-white w-fit h-fit rounded-full">
            <Image
              src="/images/twitter-logo.png"
              alt=""
              width={25}
              height={25}
            ></Image>
          </div>{" "}
        </motion.li>
      </Link>
      <Link
        href="https://www.linkedin.com/in/keshav-aneja/"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        {" "}
        <motion.li
          animate={socialOpen ? "openSocialMenu" : "closeSocialMenu"}
          variants={variantsli}
          style={{ listStyleType: "none" }}
        >
          <Image
            src="/images/linkedin.png"
            alt=""
            width={25}
            height={25}
          ></Image>
        </motion.li>
      </Link>
      <Link
        href="https://www.instagram.com/k.aneja09/"
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <motion.li
          animate={socialOpen ? "openSocialMenu" : "closeSocialMenu"}
          variants={variantsli}
          style={{ listStyleType: "none" }}
        >
          <Image
            src="/images/instagram-logo.png"
            alt=""
            width={25}
            height={25}
          ></Image>
        </motion.li>
      </Link>
    </motion.div>
  );
};
export default SocialMenu;
