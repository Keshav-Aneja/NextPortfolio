interface FilterProp {
  opacity?: String;
}
const Filter2: React.FC<FilterProp> = ({ opacity }) => {
  return (
    <svg
      className="absolute w-full h-full"
      width="1000"
      height="1000"
      opacity={`${opacity ? opacity : "0.38"}`}
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="100vw"
          height="100vh"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.102"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="15"
            specularConstant="1"
            specularExponent="20"
            lightingColor="#c98d76"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="100"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect
        width="700"
        height="700"
        fill="#c98d76"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  );
};
export default Filter2;
