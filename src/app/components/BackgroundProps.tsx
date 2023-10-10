export default function BackgroundProps() {
  return (
    <>
      <div className="circle-one w-40 h-40 md:w-80 md:h-80 rounded-full bg-secondary absolute -top-10 -left-10 md:blur-[200px] blur-[100px] pointer-events-none"></div>
      <div className="circle-two w-40 h-40 md:w-80 md:h-80 rounded-full bg-secondary absolute bottom-0 right-0 md:blur-[200px] blur-[100px] pointer-events-none"></div>
      <div className="ring levitating w-40 h-40 md:w-80 md:h-80 border-secondary border-[10px] absolute   md:top-44 top-80 left-8 md:left-20 rounded-full blur-[15px] flex justify-center items-center -z-1 pointer-events-none"></div>
      <div className="ring levitating delay-1000 w-28 h-28 md:w-40 md:h-40 border-secondary border-[10px] absolute bottom-12 md:bottom-20 left-32 md:left-20 rounded-full blur-[15px] flex justify-center items-center -z-1 pointer-events-none"></div>
      <div className="ring levitating w-16 h-16 md:w-20 md:h-20 border-secondary border-[10px] absolute md:bottom-40 bottom-48 left-56 md:left-72 rounded-full blur-[15px] flex justify-center items-center -z-1 pointer-events-none"></div>
    </>
  );
}
