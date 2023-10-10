import Image from "next/image";
interface ButtonProp {
  children: React.ReactNode;
  arrowdir?: String;
}
const ButtonOutline: React.FC<ButtonProp> = ({ children, arrowdir }) => {
  return (
    <div className="group bg-transparent border-b-2 rounded-full px-6 py-2 w-fit border-primary hover:text-tertiary font-montserrat cursor-pointer transition-all duration-200 ease-in flex justify-between items-center text-base hover:scale-[105%]">
      <Image
        src="/images/arrow-w.png"
        alt="arrow"
        width={100}
        height={100}
        className={`w-[25px] group-hover:brightness-[50%] transition-all duration-200 ease-in ${
          arrowdir ? "-rotate-90 mx-2" : ""
        }`}
      ></Image>
      {children}
    </div>
  );
};
export default ButtonOutline;
