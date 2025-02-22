// import Image from "next/image";

const MAINVISUAL_L = "/images/mainvisual.l.png";
const MAINVISUAL_M = "/images/Mainvisual.m.png";
const MAINVISUAL_SP = "/images/Mainvisual.sp.png";

interface HeroProps {
  imageOn?: boolean;
}

const Hero = ({ imageOn = false }: HeroProps) => {
  return (
    <div className="lg:h-[calc(100vh-5rem)] md:h-[calc(100vh-clamp(3rem,8vw,5rem))] h-[calc(100vh-15vw)] lg:mt-20 md:mt-[clamp(3rem,8vw,5rem)] mt-[15vw]">
      {imageOn && (
        <figure className="relative w-full h-full overflow-hidden">
          <picture className="">
            {/* 画面幅が751px以上なら MAINVISUAL_L */}
            <source media="(min-width: 750px)" srcSet={MAINVISUAL_L} />
            {/* 画面幅が750px以下 & 横向き(landscape)なら MAINVISUAL_M */}
            <source
              media="(max-width: 750px) and (orientation: landscape)"
              srcSet={MAINVISUAL_M}
            />
            {/* その他の環境 (縦向き含む) は MAINVISUAL_SP */}
            <img
              src={MAINVISUAL_SP}
              alt="メインビジュアル"
              className="w-full h-full object-cover object-center block"
            />
          </picture>
        </figure>
      )}
    </div>
  );
};
export default Hero;
