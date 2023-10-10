import React from "react";

interface BtnProp {
  text: string;
}

const colors = [
  {
    html: "#da7b56", // Orange
  },
  {
    css: "#2980B9", // Blue
  },
  {
    "tailwind css": "#06B6D4", // Cyan
  },
  {
    javascript: "#F7DF1E", // Yellow
  },
  {
    react: "#61DAFB", // Light blue
  },
  {
    "next.js": "#ffffff", // Black
  },
];
const ButtonTech: React.FC<BtnProp> = ({ text }) => {
  // Use a function in find to compare the 'text' property of each object
  const colorObj = colors.find((color) => Object.keys(color)[0] === text);

  // Check if a matching color object was found
  if (colorObj) {
    const color = colorObj[text];
    return (
      <button
        className={`px-6 py-2 rounded-full uppercase text-xs font-monsterrat border-b-2 hover:brightness-[300%] `}
        style={{ borderColor: color, color: color }}
      >
        {text}
      </button>
    );
  }

  // Handle the case where 'text' doesn't match any color
  return <button className={`px-6 py-2 border-2 border-white`}>{text}</button>;
};

export default ButtonTech;
