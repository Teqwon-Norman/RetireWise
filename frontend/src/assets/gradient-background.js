export default function GradientBackground({ className, handleclick }) {
  return (
    <>
      <svg
        width="1440"
        height="640"
        viewBox="0 0 1440 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M-1 16.1103C-1 7.21285 6.21285 0 15.1103 0H1423.89C1432.79 0 1440 7.21285 1440 16.1103V623.89C1440 632.787 1432.79 640 1423.89 640H15.1104C6.21286 640 -1 632.787 -1 623.89V16.1103Z"
          fill="url(#paint0_linear_1579_1703)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1579_1703"
            x1="-94.7092"
            y1="224.872"
            x2="-240.97"
            y2="884.377"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.015625" stop-color="#4016A0" stop-opacity="0" />
            <stop offset="0.473473" stop-color="#4016A0" />
            <stop offset="0.858977" stop-color="#3F59E4" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="48"
          fontWeight="bold"
          fontFamily="monospace"
        >
          <tspan x="17%" dy="-2.9em">
            RetireWise
          </tspan>
          <tspan x="50%" dy="1.9em">
            {" "}
          </tspan>
          <tspan x="46%" dy="1.2em">
            A Beginner-Friendly Tool For Empowering
          </tspan>
          <tspan x="44%" dy="1.2em">
            Users To Explore Different Retirement
          </tspan>
          <tspan x="24%" dy="1.2em">
            Stock Portfolios.
          </tspan>
        </text>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="100%" stop-color="#222" stop-opacity="1" /> 
            </linearGradient>
        </defs>

  <rect
    x="42%"
    y="85%"
    width="235"
    height="60"
    rx="5"
    ry="5"
    fill="url(#grad1)"
    onClick={handleclick}
  />
        <text
          x="50%"
          y="85%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="24"
          fontWeight="bold"
          fontFamily="monospace"
        >
          <tspan x="50%" dy="1.2em">
            Get Started
          </tspan>
        </text>
      </svg>
    </>
  );
}
