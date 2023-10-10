export default function Filter() {
  return (
    <>
      <svg className="absolute">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.4"
            stitchTiles="stitch"
          />
        </filter>
        <clipPath id="rounded-clip">
          <rect x="0" y="0" width="300" height="300" rx="20" ry="20" />
        </clipPath>
      </svg>
    </>
  );
}
