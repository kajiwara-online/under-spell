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
  { src: "/images/ourSalonsLogo/logo_3_2.png", alt: "Logo 15" },
  { src: "/images/ourSalonsLogo/logo_3_3.png", alt: "Logo 16" },
];

const OurSalons = () => {
  return (
    <>
      <h2 className="text-center text-sm">OUR SALONS</h2>
      <div className="grid grid-cols-4 gap-6 p-4">
        {SALONS.map((salon, index) => (
          <figure
            key={index}
            className="bg-white border p-4 flex justify-center items-center h-16 relative"
          >
            <Image
              src={salon.src}
              alt={salon.alt}
              layout="fill"
              objectFit="contain"
            />
          </figure>
        ))}
      </div>
    </>
  );
};
export default OurSalons;
