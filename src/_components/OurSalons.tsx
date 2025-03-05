import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <h2 className="text-[.8125rem] tracking-[.06em] leading-[1.230769230769231]">
        OUR SALONS
      </h2>
      <div className="mt-[1.875rem] mb-[2.5625rem] mx-0 md:mt-[1.875rem] md:mb-[3rem] md:mx-auto max-w-[1080px]">
        <div className="flex flex-wrap mt-[-.5625rem] ml-[-.5625rem] md:mt-[-1.666666666666667%] md:ml-[-1.666666666666667%]">
          {SALONS.map((salon, index) => (
            <Link
              key={index}
              href="/"
              className="block border border-[#ddd] w-[6.1875rem] mt-[.5625rem] ml-[.5625rem] relative md:mt-[1.639344262295082%] md:ml-[1.639344262295082%] md:w-[15.027322404371585%] before:content-[''] before:block before:w-full before:h-0 before:pb-[44.44444444444444%] md:before:pb-[44.84848484848485%]"
            >
              <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
                <div className="block relative overflow-hidden w-6 md:w-[2.5625rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[51.724137931034484%]">
                  <Image
                    src={salon.src}
                    alt={salon.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurSalons;
