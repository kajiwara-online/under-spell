import React from "react";
import Image from "next/image";

const MAINVISUAL = "/images/Mainvisual.png";

interface HeroProps {
  imageOn?: boolean;
}

const Hero = ({ imageOn = false }: HeroProps) => {
  return (
    <div>
      {imageOn && (
        <figure className="relative w-full h-[calc(100vh-4rem)]">
          <Image
            src={MAINVISUAL}
            alt="Mail Visual"
            layout="fill"
            objectFit="cover"
          />
        </figure>
      )}
    </div>
  );
};
export default Hero;
