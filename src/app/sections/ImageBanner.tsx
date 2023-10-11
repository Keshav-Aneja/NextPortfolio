import Image from "next/image";
interface BannerProp {
  projectOpen: boolean;
  title: any;
  img: any;
}
const ImageBanner: React.FC<BannerProp> = ({ projectOpen, title, img }) => {
  return (
    <>
      <div className="img-container w-[100%] md:w-[90%] m-auto h-[20vh] lg:h-[45vh]  overflow-hidden bg-cover bg-center relative">
        <div
          className={`hidden md:flex outline-content heading-text w-full h-full  justify-center items-center md:text-[max(8vw,5rem)] absolute z-[400] font-coolvetica tracking-wider text-transparent ${
            projectOpen
              ? "translate-y-0 "
              : "lg:-translate-y-[40vh] -translate-y-[20vh] "
          } transition-all duration-[600ms] delay-500`}
          style={{ textShadow: "0px 0px 15px rgba(0,0,0,0.4)" }}
        >
          {title}
        </div>
        <div
          className={`md:hidden text-white heading-text w-full h-full flex justify-center items-center text-[3rem]  absolute z-[400] font-coolvetica tracking-wider text-transparent ${
            projectOpen ? "translate-y-0 " : "-translate-y-[400px] "
          } transition-all duration-[600ms] delay-500`}
          style={{ textShadow: "0px 0px 15px rgba(0,0,0,0.4)" }}
        >
          SpaceGame
        </div>
        <Image
          src={`/images/${img}`}
          width={1000}
          height={400}
          alt="banner-img"
          //   ${
          //     projectOpen ? "translate-y-[0px]" : "translate-y-[300px]"
          //   }
          className={`imgBanner absolute h-full w-full blur-[4px] md:blur-[8px]`}
        />
        <div
          className={`overlay absolute  w-[100%] h-[200%] -top-[-100%] bg-black transition-all duration-1000 delay-[1000ms] ease-linear ${
            projectOpen ? "-top-[200%]" : "top-[0]"
          }`}
        ></div>
      </div>
    </>
  );
};
export default ImageBanner;
