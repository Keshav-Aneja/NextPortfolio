import React from "react";

interface ProgressCircularProps {
  name: string;
  currVal: number;
  totalVal: number;
  color: string;
  children: String;
}

const ProgressCircular: React.FC<ProgressCircularProps> = ({
  name,
  currVal,
  totalVal,
  color,
  children,
}) => {
  let progress = (currVal * 360) / totalVal;
  return (
    <>
      <div className="w-32 aspect-square rounded-[50%] flex justify-center items-center  border-2 border-[#343739]">
        <div
          className="circle w-[90%] h-[90%] rounded-[50%] flex justify-center items-center"
          style={{
            background: `conic-gradient(#020301 0deg,
          ${color} ${progress}deg,
          #020301 ${progress}deg,
          #020301 360deg)`,
          }}
        >
          <div className="w-[80%] h-[80%] rounded-[50%] flex flex-col justify-center items-center bg-[#212426] border-2 border-[#343739] drop-shadow-lg">
            <span className="text-xl font-coolvetica">{children}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProgressCircular;
