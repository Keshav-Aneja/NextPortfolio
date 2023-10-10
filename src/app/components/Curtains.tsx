interface curtainProp {
  projectOpen: any;
}
const Curtains: React.FC<curtainProp> = ({ projectOpen }) => {
  return (
    <>
      <div
        className={`top-row absolute top-0 left-0 w-[100vw] h-[100vh] transition-all duration-1000 ease-in ${
          projectOpen ? "translate-y-0" : "translate-y-[-101%]"
        } bg-black`}
      ></div>
      <div
        className={`bottom-row  absolute bottom-0 left-0 w-[100vw] h-[100vh] bg-black transition-all duration-1000 ease-in ${
          projectOpen ? "translate-y-0" : "translate-y-[101%]"
        }`}
      ></div>
    </>
  );
};
export default Curtains;
