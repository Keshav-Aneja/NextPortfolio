import Image from "next/image";
interface BackBtnProp {
  setProjectOpen: any;
}
const BackButton: React.FC<BackBtnProp> = ({ setProjectOpen }) => {
  return (
    <>
      <div
        className="remove-def text-white text-5xl flex flex-col justify-center items-center scale-90 hover:scale-100 transition-all duration-300 ease active:scale-75 cursor-pointer"
        onClick={() => {
          setProjectOpen(false);
        }}
      >
        <p className="text-primary text-2xl tracking-wider font-montserrat -mb-4">
          Go Back
        </p>
        <Image
          src="/images/arrow.png"
          width={120}
          height={120}
          alt="arrow"
          className="rotate-180 scale-y-75"
        />
      </div>
    </>
  );
};
export default BackButton;
