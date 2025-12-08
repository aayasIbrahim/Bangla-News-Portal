import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

function Logo({ width = 194, height = 95 }: LogoProps) {
  return (
    <div className="flex justify-center sm:justify-start flex-shrink-0 w-full sm:w-auto">
      <Image
        src="/logo/TSB Logo[1].png"
        alt="Logo"
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
}

export default Logo;
