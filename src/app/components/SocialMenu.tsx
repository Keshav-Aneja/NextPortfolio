import Link from "next/link";
import Image from "next/image";
interface SocialProps {
  socialOpen: boolean;
}

const SocialMenu: React.FC<SocialProps> = ({ socialOpen }) => {
  return (
    <div
      className={`social-menu scale-75 md:scale-100 w-[100%] lg:w-[50%] h-16  absolute left-[50%] translate-x-[-50%] z-100 flex justify-evenly items-center   ${
        socialOpen ? "top-2 md:top-4" : "top-[-100%]"
      }`}
    >
      <Link
        href=""
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <Image src="/images/github.png" alt="" width={25} height={25}></Image>
      </Link>
      <Link
        href=""
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <div className="content bg-white w-fit h-fit rounded-full">
          <Image
            src="/images/twitter-logo.png"
            alt=""
            width={25}
            height={25}
          ></Image>
        </div>
      </Link>
      <Link
        href=""
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <Image src="/images/linkedin.png" alt="" width={25} height={25}></Image>
      </Link>
      <Link
        href=""
        className="hover:scale-125 transition-all duration-200 ease"
      >
        <Image
          src="/images/instagram-logo.png"
          alt=""
          width={25}
          height={25}
        ></Image>
      </Link>
    </div>
  );
};
export default SocialMenu;
