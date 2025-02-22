import React from "react";
import Image from "next/image";

const SALONS = [
  { src: "/images/ourSalonsLogo/logo_0_0.png", alt: "Logo 1" },
  { src: "/images/ourSalonsLogo/logo_0_1.png", alt: "Logo 2" },
  { src: "/images/ourSalonsLogo/logo_0_2.png", alt: "Logo 3" },
  { src: "/images/ourSalonsLogo/logo_0_3.png", alt: "Logo 4" },
  { src: "/images/ourSalonsLogo/logo_1_0.png", alt: "Logo 5" },
  { src: "/images/ourSalonsLogo/logo_1_1.png", alt: "Logo 6" },
  { src: "/images/ourSalonsLogo/logo_1_2.png", alt: "Logo 7" },
  { src: "/images/ourSalonsLogo/logo_1_3.png", alt: "Logo 8" },
  { src: "/images/ourSalonsLogo/logo_2_0.png", alt: "Logo 9" },
  { src: "/images/ourSalonsLogo/logo_2_1.png", alt: "Logo 10" },
  { src: "/images/ourSalonsLogo/logo_2_2.png", alt: "Logo 11" },
  { src: "/images/ourSalonsLogo/logo_2_3.png", alt: "Logo 12" },
  { src: "/images/ourSalonsLogo/logo_3_0.png", alt: "Logo 13" },
  { src: "/images/ourSalonsLogo/logo_3_1.png", alt: "Logo 14" },
];

const OurSalons = () => {
  return (
    <div className="text-center">
      <h2 className="md:text-sm text-[clamp(5px,3.7vw,1.5rem)]">OUR SALONS</h2>
      <div className="max-w-[1080px] mx-auto md:mt-7 md:mb-12 mt-[clamp(26px,8vw,4rem)] mb-[clamp(22px,7vw,3.5rem)]">
        <div className="flex flex-wrap mt-[-1.666666666666667%] ml-[-1.666666666666667%]">
          {SALONS.map((salon, index) => (
            <figure
              key={index}
              className="md:w-[15.027322404371585%] w-[31.693989071038%] mt-[1.639344262295082%] ml-[1.639344262295082%] relative block border border-[#ddd] before:content-[''] before:block before:w-full before:h-0 before:pb-[44.84848484848485%]"
            >
              <div className="flex justify-center items-center h-full w-full absolute top-0 left-0">
                <div className="w-[2.5625rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[51.724137931034484%]">
                  <Image
                    src={salon.src}
                    alt={salon.alt}
                    layout="fill"
                    objectFit="contain"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurSalons;
